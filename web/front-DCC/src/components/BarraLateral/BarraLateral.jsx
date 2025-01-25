import React from "react";
import "./BarraLateral.css";

function BarraLateral({ Type }) {
	if (Type === "login") {
		return (
			<form className="container">
				<p className="title">Faça seu login e confira nossas receitas</p>
				<div className="inputs">
					<p>Email</p>
					<input type="email" placeholder="Ex: joao@gmail.com" />
				</div>
				<div className="inputs">
					<p>Senha</p>
					<input type="password" placeholder="Ex: 12313$gxy" />
				</div>
				<button className="btnSignIn">Entrar</button>
				<p style={{color:"#7C838A"}}>
					
					Não tem uma conta?{" "}
					<a
						href="/registro"
						style={{ textDecoration: "none", color: "#FF6653" }}>
						Registre-se!
					</a>
				</p>
			</form>
		);
	} else if (Type === "register") {
		return (
			<form
				className="container"
				style={{
					gap: "3rem",
					borderTopLeftRadius: "25px",
					borderTopRightRadius: "0px",
					borderBottomLeftRadius: "25px",
					borderBottomRightRadius: "0px",
					minHeight: "800px",
					height: "100vh",
				}}>
				<p className="title">Registre-se gratuitamente!</p>
				<div className="inputs">
					<p>Nome completo</p>
					<input type="text" placeholder="Ex: João Souza Melo" />
				</div>
				<div className="inputs">
					<p>Email</p>
					<input type="email" placeholder="Ex: joao@gmail.com" />
				</div>
				<div className="inputs">
					<p>Senha</p>
					<input type="password" placeholder="Ex: 12313$gxy" />
				</div>
				<button className="btnSignIn">Criar conta</button>
				<p style={{color:"#7C838A"}}>
					Já possui conta?{" "}
					<a href="/" style={{ textDecoration: "none", color: "#FF6653" }}>
						Faça seu login!
					</a>
				</p>
			</form>
		);
	}
}

export default BarraLateral;
