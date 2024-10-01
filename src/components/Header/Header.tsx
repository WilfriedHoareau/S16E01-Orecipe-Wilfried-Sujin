import "./Header.css";

function Header() {
	return (
		<header>
			<div>
				<img
					className="logo-img"
					src="https://raw.githubusercontent.com/O-clock-Quesadillas/S16E01-Orecipes/refs/heads/main/front_docs/logo.png?token=GHSAT0AAAAAACYDYVHN4V256Y2WQ6OXZVHYZX33DFA"
					alt="logo"
				/>
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
