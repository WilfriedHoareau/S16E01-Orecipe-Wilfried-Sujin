import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import "./App.css";

function App() {
	return (
		<div className="container">
			<Nav />
			<div className="right">
				<Header />
				<Cards />
			</div>
		</div>
	);
}

export default App;
