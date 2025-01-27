import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DetalhesReceitas from "./pages/DetalhesReceitas/DetalhesReceitas";
import Favoritos from "./pages/favoritos/favoritos"

function App() {
	return (
		<div className="body">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home/:idUser" element={<Home />} />
					<Route path="/registro" element={<Register />} />
					<Route path="/receitas/:id/:idUser" element={<DetalhesReceitas />} />
					<Route path="/favoritos/:idUser" element={<Favoritos />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
