//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let color = "Red";
function setColor() {
	if (color == "Red") {
		color = "Yellow";
	} else if (color == "Yellow") {
		color = "Green";
	} else if (color == "Green") {
		color = "Red";
	}
	ReactDOM.render(<Home color={color} />, document.querySelector("#app"));
}

setInterval(setColor, 3000);
