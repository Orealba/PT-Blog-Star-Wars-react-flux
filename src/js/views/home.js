import React from "react";
import { Carousel } from "../component/Carousel";
import { Cards } from "../component/Cards";

import "../../styles/home.css";

export const Home = () => (
	<div className=" home1">
		<Carousel />
		<Cards />
	</div>
);
