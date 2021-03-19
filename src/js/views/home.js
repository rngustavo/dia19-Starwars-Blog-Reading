import React, { useState, useEffect } from "react";

import "../../styles/home.scss";
import { Characters } from "../component/Characters.js";
import { Planets } from "../component/Planets.js";
import { Card } from "../component/Card.js";
export const Home = () => {
	const [characters, setCharacters] = useState([
		{ name: "Luke", data: "este es ...." },
		{ name: "Anakyn", data: "este es ...." },
		{ name: "Leia", data: "este es ...." }
	]);
	// name={value.name} data={value.data}
	const [planets, setPlanets] = useState([{ name: "Death Star" }, { name: "The Republic" }]);
	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="row">
				{characters.map((value, index) => {
					return (
						<div key={index} className="col ">
							<Card key={index} name={value.name} data={value.data} />
						</div>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="row">
				{planets.map((value, index) => {
					return (
						<div key={index} className="col ">
							<Card key={index} name={value.name} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
