import "./Nav.css";
import { IRecipe } from "../../@types/recipe";
import { NavLink } from "react-router-dom";

interface ICard {
	recipes: IRecipe[];
}

function Nav({ recipes }: ICard) {
	return (
		<nav className="nav">
			<NavLink
				to="/"
				className={({ isActive }) => {
					return isActive ? "nav-li active" : "nav-li";
				}}
			>
				<div className="li-text">Accueil</div>
			</NavLink>

			{recipes.map((recipe) => (
				<NavLink
					key={recipe.id}
					to={`/recipe/${recipe.slug}`}
					className={({ isActive }) => {
						return isActive ? "nav-li active" : "nav-li";
					}}
				>
					<div className="li-text">{recipe.title}</div>
				</NavLink>
			))}
		</nav>
	);
}

export default Nav;
