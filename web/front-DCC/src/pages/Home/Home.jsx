import React from "react";
import BannerComponent from "../../components/banner/banner";
import NavBarComponent from "../../components/navBar/navBar";
import Slider from "../../components/slider/slider";
import Receitas from "../../components/receitas/receitas";
import Footer from  "../../components/footer/footer";
import "./Home.css";
function Home() {
	return (
		<div className="Home">
			<NavBarComponent />
			<BannerComponent />
			<Slider /> 
			<Receitas />
			<Footer />
		</div>
	);
}

export default Home;
