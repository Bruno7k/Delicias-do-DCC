import { React, useEffect, useState, useRef } from "react";
import "./BarraLateral.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BarraLateral({ Type }) {
  if (Type === "login") {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
      emailRef.current.focus();
    }, []);

		const handleLogin = async (e) => {
			e.preventDefault();
			const loginData = {
				email: email,
				senha: password,
			};
			const jsonData = JSON.stringify(loginData);
			console.log(jsonData);
			try {
				const response = await axios.post(
					"http://127.0.0.1:8000/usuario/login",
					loginData);
					const idUser = response.data.id;
					console.log(idUser);
					navigate(`/home/${idUser}`);
			} catch (error) {
				console.error(error);
			}
			setEmail("");
			setPassword("");
		};

    return (
      <form className="container" onSubmit={handleLogin}>
        <p className="title">Faça seu login e confira nossas receitas</p>
        <div className="inputs">
          <p>Email</p>
          <input
            type="email"
            placeholder="Ex: joao@gmail.com"
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputs">
          <p>Senha</p>
          <input
            type="password"
            placeholder="Ex: 12313$gxy"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btnSignIn">Entrar</button>
        <p style={{ color: "#7C838A" }}>
          Não tem uma conta?{" "}
          <a
            href="/registro"
            style={{ textDecoration: "none", color: "#FF6653" }}
          >
            Registre-se!
          </a>
        </p>
      </form>
    );
  } else if (Type === "register") {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
      emailRef.current.focus();
    }, []);
    const handleRegister = async (e) => {
      e.preventDefault();
      const registerData = {
        nome: name,
        email: email,
        senha: password,
        receitas_favoritas: [],
      };
      const jsonData = JSON.stringify(registerData);
      console.log(jsonData);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/usuario/create",
          registerData
        );
        const id = response.data.id;
        console.log(id);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
      setName("");
      setEmail("");
      setPassword("");
    };
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
        }}
        onSubmit={handleRegister}
      >
        <p className="title">Registre-se gratuitamente!</p>
        <div className="inputs">
          <p>Nome completo</p>
          <input
            type="text"
            placeholder="Ex: João Souza Melo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <p>Email</p>
          <input
            type="email"
            placeholder="Ex: joao@gmail.com"
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputs">
          <p>Senha</p>
          <input
            type="password"
            placeholder="Ex: 12313$gxy"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btnSignIn">Criar conta</button>
        <p style={{ color: "#7C838A" }}>
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
