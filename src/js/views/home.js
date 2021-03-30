import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { CharacterCard } from "../component/CharacterCard.js";
import { PlanetsCard } from "../component/PlanetsCard.js";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { characters } = store;
	const { planets } = store;
	/* const [characters, setCharacters] = useState([
		{ name: "Luke", data: "este es ...." },
		{ name: "Anakyn", data: "este es ...." },
		{ name: "Leia", data: "este es ...." }
	]);
 */
	/* useEffect(() => {
		//  actions.loadSomeData();
		let url = "https://www.swapi.tech/api/people/";
		fetch(url)
			.then(res => res.json())
			.then(data => setCharacters(data.results));
    }, []); */

	useEffect(() => {
		actions.loadSomeData();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="row d-flex">
				<div className="scrolling-wrapper">
					{characters.map((value, index) => {
						return (
							<div className="card" key={index}>
								<CharacterCard key={index} name={value.name} data={value.url} uid={index + 1} />
							</div>
						);
					})}
				</div>
			</div>
			<h1>Planets</h1>
			<div className="row d-flex">
				<div className="scrolling-wrapper">
					{planets.map((value, index) => {
						return (
							<div className="card" key={index}>
								<PlanetsCard key={index} name={value.name} data={value.url} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
