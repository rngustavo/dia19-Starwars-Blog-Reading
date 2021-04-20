import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Footer = () => {
	const { store, actions } = useContext(Context);
	const { islogin, urlApi } = store;
	const { setLogin } = actions;
	const loginout = () => {
		console.log(islogin);
		setLogin(false);
		console.log(islogin);
	};
	return islogin ? (
		<footer className="footer mt-auto py-3 text-center">
			<p>
				Made with <a href={urlApi}>The Star Wars API</a>
			</p>
			<Link to="/login" className="btn btn-success" onClick={loginout}>
				Logout!
			</Link>
		</footer>
	) : (
		<footer className="footer mt-auto py-3 text-center">
			<p>
				Made with <a href={urlApi}>The Star Wars API</a>
			</p>
			<Link to="/register" className="btn btn-success">
				Register!
			</Link>
			<Link to="/login" className="btn btn-primary">
				Log In
			</Link>
		</footer>
	);
};
