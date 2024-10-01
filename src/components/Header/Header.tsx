import "./Header.css";

function Header() {
	return (
		<header>
			<div>
				<img className="logo-img" src="./src/assets/logo.png" alt="logo" />
			</div>
			<form>
				<input type="email" name="email" placeholder="Adresse Email" />
				<input type="password" name="password" placeholder="Mot de passe" />
				<button type="submit" className="btn">
					OK
				</button>
			</form>
		</header>
	);
}

export default Header;
