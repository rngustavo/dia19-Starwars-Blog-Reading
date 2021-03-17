import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star_Wars_Logo.svg.png";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="logo" src={logo} />
				</span>
			</Link>

			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton2"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Favorities
				</button>
				<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
					<li>
						<a className="dropdown-item active" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
