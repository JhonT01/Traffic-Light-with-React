import React, { useState } from "react";
import PropTypes from "prop-types";

const Semaforo = () => {
	// Hook useState del estado prendido o apagado
	// Dentro del useState() defino estado inicial
	const [redlight, setRedlight] = useState("color1");
	const [yellowlight, setYellowlight] = useState("color2");
	const [greenlight, setGreenlight] = useState("color3");

	// Funciones del eventListener para prender la luz correspondiente
	const turnOnRedlight = () => {
		// Se modifica el estado mediante setRedlight
		// si el state depende de un estado previo usar la forma con funcion (prevState) => newState
		setRedlight(prevRed =>
			prevRed == "color1"
				? (prevRed = "color1-ligth")
				: (prevRed = "color1")
		);
	};

	const turnOnYellowlight = () => {
		setYellowlight(prevYellow =>
			prevYellow == "color2"
				? (prevYellow = "color2-ligth")
				: (prevYellow = "color2")
		);
	};

	const turnOnGreenlight = () => {
		setGreenlight(prevGreen =>
			prevGreen == "color3"
				? (prevGreen = "color3-ligth")
				: (prevGreen = "color3")
		);
	};

	return (
		<div id="traffic-light">
			<input
				type="radio"
				name="traffic-light-color"
				id={redlight}
				value="color1"
				onClick={turnOnRedlight}
			/>
			<input
				type="radio"
				name="traffic-light-color"
				id={yellowlight}
				value="color2"
				onClick={turnOnYellowlight}
			/>
			<input
				type="radio"
				name="traffic-light-color"
				id={greenlight}
				value="color3"
				onClick={turnOnGreenlight}
			/>
		</div>
	);
};

export default Semaforo;
