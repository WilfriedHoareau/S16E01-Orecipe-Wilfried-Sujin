import "./Cards.css";
import Card from "../Card/Card";

function Cards() {
	return (
		<main>
			<section id="recipe">
				<h1>Les recettes O'Recipes</h1>
				<h2>Voici nos 6 recettes</h2>

				<div className="cards">
					<Card />
				</div>
			</section>
		</main>
	);
}

export default Cards;
