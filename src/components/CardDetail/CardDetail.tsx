import { useParams } from "react-router-dom";
import "./CardDetail.css";
import { IRecipe } from "../../@types/recipe";

interface ICard {
	recipes: IRecipe[];
}

function CardDetail({ recipes }: ICard) {
	const param = useParams();

	const recipe = recipes.find((recipe) => recipe.slug === param.slug);

	return (
		<section>
			<div className="img-wrap">
				<img
					className="recipe-img"
					src={recipe?.thumbnail}
					alt={recipe?.title}
				/>
				<div className="img-text-wrap">
					<div className="img-title">{recipe?.title}</div>
					<div className="img-subtitle">
						<span>{recipe?.author}</span> - <span>{recipe?.difficulty}</span>
					</div>
				</div>
			</div>
			{/* ingredient */}
			{recipe?.ingredients.map((recipe) => (
				<div key={recipe.id} className="ingredients">
					<div className="quantity">
						{recipe?.quantity} {recipe?.unit}
					</div>
					<p>{recipe.name}</p>
				</div>
			))}
			{/* recette */}
			<ul className="instruction-ul">
				{recipe?.instructions.map((instr) => (
					<li key={instr} className="instruction-li">
						<div className="bar" />
						<div>{instr}</div>
					</li>
				))}
			</ul>
		</section>
	);
}

export default CardDetail;
