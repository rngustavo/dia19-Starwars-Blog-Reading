import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characterprofile.scss";
import Image from "../../img/Star_Wars_Logo.svg.png";
import caracter from "../store/character.json";

export const CharacterProfile = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const { info } = store;
	const { loadSomeInfoCharacter } = actions;

	//console.log("id", params.theid);
	useEffect(() => {
		loadSomeInfoCharacter(params.theid);
	}, []);

	const { name, birth_year, gender, height, skin_color, eye_color } = info;
	//console.log(info);
	return (
		<div className="container">
			{/* <pre> {JSON.stringify(caracter.result.properties, undefined, 2)}</pre> */}
			<h1>Personaje Jedi....</h1>
			<div className="card mb-3" style={{ maxWidth: "1500px" }}>
				<div className="row no-gutters">
					<div className="col-md-6 ">
						<img src={Image} alt="..." className="imagen" />
					</div>
					<div className="col-md-6">
						<div className="card-body">
							<h5 className="card-title"> {name} </h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
								{height}
								{/* <pre> {JSON.stringify(caracter.result.properties, undefined, 2)}</pre> */}
							</p>
						</div>
					</div>
				</div>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Birth Year</th>
						<th scope="col">Gender</th>
						<th scope="col">Height</th>
						<th scope="col">Skin Color</th>
						<th scope="col">Eye Color</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{name}</td>
						<td>{birth_year}</td>
						<td>{gender}</td>
						<td>{height}</td>
						<td>{skin_color}</td>
						<td>{eye_color}</td>
					</tr>
				</tbody>
			</table>

			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
