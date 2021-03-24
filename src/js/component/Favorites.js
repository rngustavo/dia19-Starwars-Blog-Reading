import React, { useState } from "react";

import "../../styles/index.scss";

export function Favorites() {
	const [favorites, setFavorites] = useState([
		{ name: "Luke", data: "este es ...." },
		{ name: "Anakyn", data: "este es ...." },
		{ name: "Leia", data: "este es ...." }
	]);

	return (
		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			{favorites.map((value, index) => {
				return (
					<div key={index}>
						<a key={index} className="dropdown-item" href="#">
							{value.name}
						</a>
					</div>
				);
			})}
		</div>
	);
	/* return (
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
    ); */
}
