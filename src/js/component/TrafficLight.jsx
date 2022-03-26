import React, { useState } from "react";
export function TrafficLight(props) {
	const [on, setOn] = useState("");
	return (
		<div className="container">
			<div
				onClick={() => setOn("Red")}
				className={props.color == "Red" ? "Red on" : "Red"}></div>

			<div
				onClick={() => setOn("Yellow")}
				className={
					props.color == "Yellow" ? "Yellow on" : "Yellow"
				}></div>
			<div
				onClick={() => setOn("Green")}
				className={props.color == "Green" ? "Green on" : "Green"}></div>
		</div>
	);
}
