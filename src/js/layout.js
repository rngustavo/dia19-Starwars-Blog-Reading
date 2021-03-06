import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
//import { CharacterCard } from "./component/CharacterCard";
import { CharacterProfile } from "./views/CharacterProfile";
import { PlanetProfile } from "./views/PlanetProfile";

import { Register } from "./views/register";
import { Login } from "./views/login";
//import { Context } from "./store/appContext";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	//const { store, actions } = useContext(Context);
	//const { islogin } = store;
	//	const { setLogin } = actions;
	//	console.log(islogin);
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/CharacterProfile/:theid">
							<CharacterProfile />
						</Route>
						<Route exact path="/PlanetProfile/:ptheid">
							<PlanetProfile />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
