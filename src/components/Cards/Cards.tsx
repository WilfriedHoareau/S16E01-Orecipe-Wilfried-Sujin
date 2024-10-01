import "./Cards.css";
import Card from "../Card/Card";
import { IRecipe } from "../../@types/recipe";

interface ICards {
	recipes: IRecipe[];
}

function Cards({ recipes }: ICards) {
	return (
		<main>
			<section id="recipe">
				<h1>Les recettes O'Recipes</h1>
				<h2>Voici nos {recipes.length} recettes</h2>

				<div className="cards">
					{recipes.map((recipe) => (
						<Card key={recipe.id} recipe={recipe} />
					))}
				</div>
			</section>
		</main>
	);
}

export default Cards;
