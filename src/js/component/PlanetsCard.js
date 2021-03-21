import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Image from "../../img/Star_Wars_Logo.svg.png";
import "../../styles/index.scss";
export const PlanetsCard = props => {
	//console.log(props);
	return (
		<div className="card " style={{ width: "18rem" }}>
			<img src={Image} className="card-img-top " alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.data}</p>
				<a href="#" className="btn btn-primary">
					Learn more!
				</a>
				<a href="#" className="btn btn-warning">
					favorite
				</a>
			</div>
		</div>
	);
};
PlanetsCard.propTypes = {
	name: PropTypes.string,
	data: PropTypes.string
};
