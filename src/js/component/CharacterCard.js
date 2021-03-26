import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Image from "../../img/Star_Wars_Logo.svg.png";
import "../../styles/index.scss";
//export const CharacterCard = props =>
export function CharacterCard({ name, data, uid }) {
	const { store, actions } = useContext(Context);
	const [on, setOn] = useState(false);
	const Favorito = () => setOn(o => !o);
	return (
		<div className="card " style={{ width: "18rem" }}>
			<img src={Image} className="card-img-top " alt="..." />
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{data}</p>
				<a href="#" className="btn btn-primary">
					<Link to={"/CharacterProfile/" + uid}>Learn more! </Link>
				</a>
				<a href="#" className={on ? "btn btn-success" : "btn btn-primary"} onClick={Favorito}>
					Favorito
				</a>
			</div>
		</div>
	);
}
CharacterCard.propTypes = {
	name: PropTypes.string,
	data: PropTypes.string,
	uid: PropTypes.number
};
