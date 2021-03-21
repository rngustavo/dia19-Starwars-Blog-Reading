import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { CharacterCard } from "../component/CharacterCard.js";
import { PlanetsCard } from "../component/PlanetsCard.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	/* useEffect(() => {
		actions.loadSomeData();
	}, []); */

	//actions.loadSomeData();
	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="row d-flex">
				{store.characters.map((value, index) => {
					return (
						<div key={index}>
							<CharacterCard key={index} name={value.name} data={value.data} />
						</div>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="row d-flex">
				{store.planets.map((value, index) => {
					return (
						<div key={index}>
							<PlanetsCard key={index} name={value.name} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
