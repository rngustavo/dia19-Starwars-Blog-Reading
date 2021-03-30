import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/characterprofile.scss";
import Image from "../../img/Star_Wars_Logo.svg.png";

export const PlanetProfile = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const { info } = store;
	const { loadSomeInfoPlanet } = actions;

	useEffect(() => {
		loadSomeInfoPlanet(params.ptheid);
	}, []);

	const { name, rotation_period, orbital_period, diameter, climate, gravity } = info;

	return (
		<div className="container">
			<h1>
				Planet {name}
				....
			</h1>
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
							</p>
						</div>
					</div>
				</div>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Rotation period</th>
						<th scope="col">Orbital period</th>
						<th scope="col">Diameter</th>
						<th scope="col">Climate </th>
						<th scope="col">Gravity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{name}</td>
						<td>{rotation_period}</td>
						<td>{orbital_period}</td>
						<td>{diameter}</td>
						<td>{climate}</td>
						<td>{gravity}</td>
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
