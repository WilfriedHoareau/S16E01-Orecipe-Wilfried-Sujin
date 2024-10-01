import "./Card.css";
import { IRecipe } from "../../@types/recipe";
import { NavLink } from "react-router-dom";

interface ICard {
	recipe: IRecipe;
}

function Card({ recipe }: ICard) {
	return (
		<>
			<div className="card">
				<img src={recipe.thumbnail} alt={recipe.slug} />
				<h3>{recipe.title}</h3>
				<p>Difficulté : {recipe.difficulty}</p>
				<NavLink to={`/recipe/${recipe.slug}`}>
					<button type="button">Voir la recette</button>
				</NavLink>
			</div>
		</>
	);
}

export default Card;
