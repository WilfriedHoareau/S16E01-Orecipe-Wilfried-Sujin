import "./Nav.css";

function Nav() {
	return (
		<nav className="nav">
			<ul className="nav-ul">
				<li className="nav-li active">
					<div className="li-text">Accueil</div>
				</li>
				<li className="nav-li">
					<div className="li-text">Cookies au beurre de cacahuète</div>
				</li>
				<li className="nav-li">
					<div className="li-text">Macaron framboisier</div>
				</li>
				<li className="nav-li">
					<div className="li-text">Tarte au citron meringuée</div>
				</li>
				<li className="nav-li">
					<div className="li-text">Amandier</div>
				</li>
				<li className="nav-li">
					<div className="li-text">Fondant au chocolat sans gluten</div>
				</li>
				<li className="nav-li">
					<div className="li-text">Tarte Banoffee</div>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
