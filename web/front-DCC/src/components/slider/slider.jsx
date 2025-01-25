import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../card/card";
import React from "react";
import "./slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "@mui/material";

const CustomArrow = ({ className, style, onClick, isNext }) => (
	<div
		className={`${className} custom-arrow ${
			isNext ? "next-arrow" : "prev-arrow"
		}`}
		style={{ ...style }}
		onClick={onClick}>
		{isNext ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
	</div>
);

function MultipleItems() {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: isMobile ? 1 : 2,
		slidesToScroll: isMobile ? 1 : 2,
		nextArrow: <CustomArrow isNext />, 
		prevArrow: <CustomArrow />, 
	};

	const info = [
		{
			image:
				"https://imgs.search.brave.com/Fhn8P3M6MXNjeGDKfvgeCbVD4oM4xBaJUHdJEro58dM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L2ZyYW5nby1lbnNv/cGFkby1jb20tYmF0/YXRhcy5qcGVn",
			title: "Frango com Batatas",
			description: "Descrição da receita 1",
		},
		{
			image:
				"https://imgs.search.brave.com/VC1SM5xb7jXkGR--UonaZMe0lsqZ-fhXt7ykYCy5HQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgw/ODExNzM3L3Bob3Rv/L2Nob2NvbGF0ZS1t/b3Vzc2UuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVg1b0dp/b3AwckJ6U05oSFB2/bFhFU3JBRTlJUjJk/U3RKcVJIOUxpUTV4/YmM9",
			title: "Mousse de Chocolate",
			description: "Descrição da receita 2",
		},
		{
			image:
				"https://imgs.search.brave.com/XEspNYYAEOe_IXYgJnmnmZe5ULmaZhJnLZbTHxszgkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0ZXJpYS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/L21vZWxhLWRlLWZy/YW5nby03MzB4NDgw/LmpwZw",
			title: "Frango",
			description: "Descrição da receita 3",
		},
		{
			image:
				"https://imgs.search.brave.com/wY7TPkRhtYwYip5yDzLPSOtVrZ76J2n-F6UZziCpmz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZWl0YWRldm92/by5jb20uYnIvX25l/eHQvaW1hZ2U_dXJs/PWh0dHBzOi8vZDJx/Y3B0MWlkdnBpcHcu/Y2xvdWRmcm9udC5u/ZXQvcmVjaXBlcy8y/MDEzLzA0L21vdXNz/ZS1kZS1tb3Jhbmdv/LmpwZyZ3PTM4NDAm/cT03NQ",
			title: "Mousse de Morango",
			description: "Descrição da receita 4",
		},
		{
			image:
				"https://imgs.search.brave.com/1QJ_68fHS9O1z4RUaMTxeCYXqYuUvMUJRtMnfglBE1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9jb2NhLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMy9QdWRpbS1k/ZS1sZWl0ZS5qcGVn",
			title: "Pudim",
			description: "Descrição da receita 5",
		},
		{
			image:
				"https://imgs.search.brave.com/CE0R83fs6w_1O1devg_UgpaJm7YDV-R1Jt4DGBMLtdk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWJp/bWcuYmFuZC51b2wu/Y29tLmJyL2ZpbGVz/L2JlZDdhODU5YTA3/NmZiM2ZiOTYwLmpw/Zw",
			title: "Bolo de Chocolate",
			description: "Descrição da receita 6",
		},
	];

	return (
		<div className="featured-container">
			<h1>RECEITAS EM DESTAQUE</h1>
			<div className="slider-container">
				<Slider {...settings}>
					{info.slice(0, 6).map((item, index) => (
						<div className="card-container" key={index}>
							<CardComponent
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
