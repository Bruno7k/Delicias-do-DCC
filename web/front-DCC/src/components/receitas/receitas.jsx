import "./receitas.css";
import CardComponent from "../card/card";
import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";

// Componente Receitas
function Receitas() {
    const [recipes, setRecipes] = useState([]);  // Estado para armazenar as receitas
    const [loading, setLoading] = useState(true); // Estado para o carregamento
    const mobile = useMediaQuery("(max-width: 432px)");

    // Função para buscar as receitas da API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/receita/random"); // URL da API
                const data = await response.json();
                const recipesData = data.map(recipe => ({
                    image: recipe.url_imagem,  // Pega o campo url_imagem
                    title: recipe.titulo,      // Pega o campo titulo
                    description: recipe.descricao,  // Pega o campo descricao
                }));
                setRecipes(recipesData);  // Atualiza o estado com as receitas
            } catch (error) {
                console.error("Erro ao buscar receitas:", error);
            } finally {
                setLoading(false);  // Finaliza o estado de carregamento
            }
        };

        fetchRecipes();
    }, []);  // O array vazio faz com que a requisição seja feita apenas uma vez, ao montar o componente

    // Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados
    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="receitas">
            <div className="receitas-text">
                <p>Receitas</p>
                <h1>EMBARQUE NESSA JORNADA</h1>
                <h3>
                    Com nossa diversa coleção de receitas, temos algo para satisfazer todos os paladares.
                </h3>
            </div>
            <div className="receitas-cards">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, sm: 2 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        justifyContent="center"
                        sx={{
                            "@media (max-width: 901px)": {
                                display: "grid",
                                gridTemplateColumns: "repeat(1, 1fr)", // 1 coluna
                            },
                            "@media (min-width: 902px and max-width: 1330px)": {
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)", // 2 colunas
                            },
                            "@media (min-width: 1330px)": {
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)", // 3 colunas
                            },
                        }}
                    >
                        {recipes.map((item, index) => (
                            <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
                                <div className="receita-card">
                                    <CardComponent
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        width={mobile ? 250 : 426}
                                    />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Receitas;
