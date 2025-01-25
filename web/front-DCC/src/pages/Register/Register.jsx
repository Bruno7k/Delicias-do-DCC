import React from "react";
import "./Register.css";
import BarraLateral from "../../components/BarraLateral/BarraLateral";

function Register() {
	return (
		<div
			className="bodyRegister"
			style={{ position: "relative", overflow: "hidden", zIndex: "0" }}>
			<BarraLateral Type="register" />
			<img
				src="./src/assets/imageRegister.png"
				style={{
					position: "absolute",
					top: "20%",
					left: "10%",
					height: "603px",
					width: "419px",
					zIndex: "0",
				}}
			/>
			<img
				src="./src/assets/bubble1.png"
				style={{
					position: "absolute",
					top: "20%",
					left: "0",
					height: "607px",
					width: "530px",
					zIndex: "-2",
				}}
			/>
			<img
				src="./src/assets/bubble2.png"
				style={{
					position: "absolute",
					top: "50%",
					left: "10%",
					height: "469px",
					width: "550px",
					zIndex: "-1",
				}}
			/>
			<img
				src="./src/assets/bubble3.png"
				style={{
					position: "absolute",
					top: "10%",
					left: "10%",
					height: "661px",
					width: "526px",
					zIndex: "-3",
				}}
			/>
		</div>
	);
}

export default Register;
