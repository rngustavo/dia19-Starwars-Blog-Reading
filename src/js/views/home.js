import React from "react";
import rigoImage from "../../img/Star_Wars_Logo.svg.png";
import "../../styles/home.scss";

export const Home = () => (
	<div classNameName="text-center ">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>

		<a href="#" classNameName="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<div className="dropdown">
			<button
				className="btn btn-secondary dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Dropdown button
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a className="dropdown-item" href="#">
					Action
				</a>
				<a className="dropdown-item" href="#">
					Another action
				</a>
				<a className="dropdown-item" href="#">
					Something else here
				</a>
			</div>
		</div>
		{/* <div classNameName="btn-group">
			<button
				type="button"
				classNameName="btn btn-danger dropdown-toggle"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				Action
			</button>
			<ul classNameName="dropdown-menu">
				<li>
					<a classNameName="dropdown-item" href="#">
						Action
					</a>
				</li>
				<li>
					<a classNameName="dropdown-item" href="#">
						Another action
					</a>
				</li>
				<li>
					<a classNameName="dropdown-item" href="#">
						Something else here
					</a>
				</li>
			</ul>
		</div> */}
	</div>
);
