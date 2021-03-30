import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.scss";

export function Favorites() {
	const { store, actions } = useContext(Context);
	const { favorites, setFavorites } = store;

	return (
		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			{favorites.map((value, index) => {
				return (
					<div key={index}>
						<a key={index} className="dropdown-item" href="#">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
