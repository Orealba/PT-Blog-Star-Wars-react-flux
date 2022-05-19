import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";
import { Footer } from "./component/footer";
import { Carousel } from "./component/Carousel";
import { Cards } from "./component/Cards";
import { Peliculas } from "./views/peliculas";
import { Personajes } from "./views/personajes";
import { Planets } from "./views/planets";
import { MoreDetails } from "./views/MoreDetails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				{/*<ScrollToTop>*/}
					<Navbar />
					
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/peliculas">
							<Peliculas />
						</Route>
						<Route exact path="/peliculas/:position">
							<MoreDetails />
						</Route>
						<Route exact path="/planetas">
							<Planets />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						</Switch>
						{/*<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
						
						</Route>
					
	<Footer />
				</ScrollToTop>*/}
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
