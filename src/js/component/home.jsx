import propTypes from "prop-types";
import React from "react";
import { TrafficLight } from "./TrafficLight.jsx";

//include images into your bundle

//create your first component
const Home = (props) => {
	return <TrafficLight color={props.color} />;
};

export default Home;
