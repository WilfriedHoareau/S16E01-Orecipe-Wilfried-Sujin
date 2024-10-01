import "./Card.css";

function Card() {
	return (
		<>
			<div className="card">
				<img
					src="https://www.sunny-delices.fr/wp-content/uploads/2022/09/cookies-beurre-cacahouettes-sans-gluten.jpg"
					alt="Cookies au beurre de cacahuète"
					width="300"
					height="200"
				/>
				<h3>Cookies au beurre de cacahuète</h3>
				<p>Difficulté: Facile</p>
				<button type="button">Voir la recette</button>
			</div>

			<div className="card">
				<img
					src="https://img.cuisineaz.com/660x495/2017/10/16/i133093-recette-macaron-noel-framboise.webp"
					alt="Macaron framboisier"
					width="300"
					height="200"
				/>
				<h3>Macaron framboisier</h3>
				<p>Difficulté: Difficile</p>
				<button type="button">Voir la recette</button>
			</div>

			<div className="card">
				<img
					src="https://www.sunny-delices.fr/wp-content/uploads/2020/04/tarte-au-citron-meringuee-sans-gluten-768x511.jpg"
					alt="Tarte au citron meringuée"
					width="300"
					height="200"
				/>
				<h3>Tarte au citron meringuée</h3>
				<p>Difficulté: Moyen</p>
				<button type="button">Voir la recette</button>
			</div>

			<div className="card">
				<img
					src="https://www.sunny-delices.fr/wp-content/uploads/2020/11/amandier-sans-gluten-1-768x511.jpg"
					alt="Amandier"
					width="300"
					height="200"
				/>
				<h3>Amandier</h3>
				<p>Difficulté: Facile</p>
				<button type="button">Voir la recette</button>
			</div>
		</>
	);
}

export default Card;
