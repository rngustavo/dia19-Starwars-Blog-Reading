import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
//import { Context } from "../store/appContext";
import "../../styles/demo.scss";

import caracter from "../store/character.json";

export const CharacterProfile = () => {
	//const { store } = useContext(Context);
	//console.log(caracter.result.properties);

	//actions.loadSomeData();

	return (
		<div className="container">
			<div> {JSON.stringify(caracter.result.properties, null, "\t")}</div>
			<h1>personaje jedi....</h1>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
