import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logo from "../../img/Star_Wars_Logo.svg.png";
import { Favorites } from "../component/Favorites.js";
export const Navbar = () => {
	const { store } = useContext(Context);
	const { favorites } = store;

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="logoNav" src={logo} />
				</span>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <span>{favorites.length}</span>
				</button>
				<Favorites />
			</div>
		</nav>
	);
};
