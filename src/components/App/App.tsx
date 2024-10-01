import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import CardDetail from "../CardDetail/CardDetail";

import "./App.css";

import { IRecipe } from "../../@types/recipe";

function App() {
	const [recipes, setRecipes] = useState<IRecipe[]>([]);

	useEffect(() => {
		const getRecipes = async () => {
			try {
				const response = await axios.get(
					"https://orecipesapi.onrender.com/api/recipes",
				);

				setRecipes(response.data);
			} catch (err) {
				console.log(err);
			}
		};

		getRecipes();
	}, []);

	return (
		<div className="container">
			<Nav recipes={recipes} />
			<div className="right">
				<Header />
				<Routes>
					<Route path="/" element={<Cards recipes={recipes} />} />
					<Route
						path="/recipe/:slug"
						element={<CardDetail recipes={recipes} />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
