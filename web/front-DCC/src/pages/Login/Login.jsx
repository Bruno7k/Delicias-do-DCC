import React from "react";
import "./Login.css";
import BarraLateral from "../../components/BarraLateral/BarraLateral";

function Login() {
	return (
		<div
			className="bodyLogin"
			style={{ position: "relative", overflow: "hidden", zIndex: "0" }}>
			<BarraLateral Type="login" />
			<img
				src="./src/assets/imageRegister.png"
				style={{
					position: "absolute",
					top: "20%",
					right: "10%",
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
					right: "0",
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
					right: "10%",
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
					right: "10%",
					height: "661px",
					width: "526px",
					zIndex: "-3",
				}}
			/>
		</div>
	);
}

export default Login;
