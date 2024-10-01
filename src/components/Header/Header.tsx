import "./Header.css";
import axios from "axios";
import { useRef, useEffect, useState } from "react";

function Header() {
	const [isLogged, setIsLogged] = useState(false);
	const [messageError, setMessageError] = useState(false);
	const [pseudo, setPseudo] = useState<string | null>(null);
	const newEmail = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		const myInputElem = newEmail.current as HTMLInputElement;
		myInputElem.focus();
	}, []);

	const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		try {
			const response = await axios.post(
				"https://orecipesapi.onrender.com/api/login/",
				{ email, password },
			);
			setPseudo(response.data.pseudo);
			setIsLogged(response.data.logged);
		} catch (err) {
			console.log(err);
			setMessageError(true);
			setIsLogged(false);
		}
	};

	return (
		<header>
			<div>
				<img className="logo-img" src="./src/assets/logo.png" alt="logo" />
			</div>
			{isLogged ? (
				<div>Bienvenue {pseudo}</div>
			) : (
				<div>
					{messageError && <div>Erreur de connexion</div>}
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							name="email"
							placeholder="Adresse Email"
							ref={newEmail}
						/>
						<input type="password" name="password" placeholder="Mot de passe" />
						<button type="submit" className="btn">
							OK
						</button>
					</form>
				</div>
			)}
		</header>
	);
}

export default Header;
