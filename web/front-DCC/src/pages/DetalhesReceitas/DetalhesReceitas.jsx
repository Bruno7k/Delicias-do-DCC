import React from "react";
import "./DetalhesReceitas.css";
import NavBar from "../../components/navBar/navBar";
import Instrucoes from "../../components/instrucoes/instrucoes"
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";

function DetalhesReceitas() {
    return (
        <div className="Detalhes-receitas">
            <NavBar />
            <Instrucoes />
            <Slider />
            <Footer />
        </div>

    );
}

export default DetalhesReceitas;