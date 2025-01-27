import React, { useEffect, useState } from "react";
import axios from "axios";
import "./favoritos.css";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import Card from "../../components/card/card";
import Grid from "@mui/material/Grid2";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function Favoritos() {
    const { idUser } = useParams(); // Captura o id do usuário da URL
    const [recipes, setRecipes] = useState([]); // Estado para armazenar as receitas favoritas
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento
    const isMobile = useMediaQuery("(max-width: 600px)"); // Verifica se a tela é mobile

    // Faz a requisição para buscar as receitas favoritas do usuário
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/usuario/${idUser}/receitas-favoritas`);
                setRecipes(response.data); // Armazena as receitas no estado
                setLoading(false); // Atualiza o estado de carregamento
            } catch (error) {
                console.error("Erro ao carregar as receitas favoritas", error);
                setLoading(false); // Também para o carregamento em caso de erro
            }
        };

        fetchFavorites();
    }, [idUser]); // Recarrega quando o iDuser mudar

    // Se estiver carregando, exibe uma mensagem de loading
    if (loading) {
        return <div>Carregando receitas...</div>;
    }

    return (
        <div className="Favoritos">
            <NavBar />
            <div className="Favoritos-container">
                <div className="Favoritos-cima">
                    <h1>Minhas Receitas Favoritas</h1>
                    <p>Bem-vindo à sua coleção de receitas favoritas! Aqui, você encontrará uma seleção especial de pratos que aquecem o coração e despertam o paladar. Seja você um cozinheiro experiente ou alguém que está começando a explorar o mundo da culinária, essas receitas foram escolhidas com carinho para inspirar sua criatividade na cozinha. Prepare-se para delícias que trarão sorrisos à mesa e momentos inesquecíveis ao lado de quem você ama!</p>
                </div>
                <div className="Favoritos-baixo">
                    <h3>Meus favoritos</h3>
                    {recipes.length === 0 ? (
                        <p>Você ainda não tem receitas favoritas.</p>
                    ) : (
                        <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', marginTop: '40px'}} >
                            {recipes.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <div className="receita-card">
                                        <Card
                                            id={item.id}
                                            image={item.url_imagem}
                                            title={item.titulo}
                                            description={item.descricao}
                                            type="favoritos"
                                            width={isMobile? 300 : 427}
                                            idUser={idUser}
                                        />
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Favoritos;