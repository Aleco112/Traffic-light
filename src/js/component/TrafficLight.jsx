import React, { useState } from "react";
export function TrafficLight(props) {
	const [on, setOn] = useState("");
	return (
		<div className="container">
			<div
				onClick={() => setOn("Red")}
				className={on == "Red" ? "Red on" : "Red"}></div>

			<div
				onClick={() => setOn("Yellow")}
				className={on == "Yellow" ? "Yellow on" : "Yellow"}></div>
			<div
				onClick={() => setOn("Green")}
				className={on == "Green" ? "Green on" : "Green"}></div>
		</div>
	);
}
