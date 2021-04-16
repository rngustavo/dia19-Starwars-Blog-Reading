import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <a href="https://swapi.dev/">The Star Wars API</a>
		</p>
		<Link to="/register" className="btn btn-success">
			Register!
		</Link>
		<Link to="/login" className="btn btn-primary">
			Log In
		</Link>
	</footer>
);
