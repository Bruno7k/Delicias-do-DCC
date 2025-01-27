import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../card/card";
import React, { useState, useEffect } from "react";
import "./slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";

// Custom Arrow component
const CustomArrow = ({ className, style, onClick, isNext }) => (
  <div
    className={`${className} custom-arrow ${isNext ? "next-arrow" : "prev-arrow"}`}
    style={{ ...style }}
    onClick={onClick}>
    {isNext ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
  </div>
);

function MultipleItems() {
  const [recipes, setRecipes] = useState([]);  // State to hold fetched recipes
  const [loading, setLoading] = useState(true);  // State to show loading state
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Fetch recipes from backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/receita/random");  // URL do backend
        const data = await response.json();
        const recipesData = data.map(recipe => ({
          id: recipe.id,            // Pega o campo id
          image: recipe.url_imagem,  // Pega o campo url_imagem
          title: recipe.titulo,      // Pega o campo titulo
          description: recipe.descricao,  // Pega o campo descricao
        }));
        setRecipes(recipesData);  // Atualiza o estado com os dados das receitas
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      } finally {
        setLoading(false);  // Finaliza o estado de carregamento
      }
    };

    fetchRecipes();
  }, []);  // O array vazio faz com que a requisição seja feita apenas uma vez, ao montar o componente

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    nextArrow: <CustomArrow isNext />,
    prevArrow: <CustomArrow />,
  };

  // Exibe um carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="featured-container">
      <h1>RECEITAS EM DESTAQUE</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {recipes.slice(0, 6).map((item, index) => (
            <div className="card-container" key={index}>
              <CardComponent
                id = {item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                width={632}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MultipleItems;
