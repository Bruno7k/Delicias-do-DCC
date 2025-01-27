import React, { useState, useEffect } from "react";
import "./instrucoes.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import axios from "axios";

function Instrucoes() {
  const { id } = useParams(); // Obtém o ID da receita da URL
  const { idUser } = useParams(); // Obtém o ID do usuário da URL
  const [receita, setReceita] = useState(null); // Estado para armazenar os dados da receita
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Faz a requisição para buscar os detalhes da receita
    const fetchReceita = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/receita/detail/${id}`);
        setReceita(response.data); // Armazena os dados da API no estado
        setIsLoading(false); // Marca como carregado
      } catch (error) {
        console.error("Erro ao buscar a receita:", error);
        setIsLoading(false); // Marca como carregado mesmo em caso de erro
      }
    };
    fetchReceita();
  }, [id]);

  const handleFavoritar = async () => {
    try {
      // Faz a requisição para adicionar a receita aos favoritos do usuário
      const response = await axios.post(
        `http://127.0.0.1:8000/usuario/${idUser}/add-receita`,
        {
          receita_id: id, // Passa o id da receita
        }
      );
      console.log("Receita favoritada com sucesso", response.data);
    } catch (error) {
      console.error("Erro ao favoritar a receita:", error);
    }
  };

  if (isLoading) {
    // Exibe um loader enquanto os dados estão sendo carregados
    return <div>Carregando...</div>;
  }

  if (!receita) {
    // Exibe uma mensagem caso não encontre a receita
    return <div>Receita não encontrada.</div>;
  }

  // Limpa a string de ingredientes e divide corretamente por vírgula e quebras de linha
  const ingredientes = receita.ingredientes
    .replace(/\n/g, ",")  // Substitui quebras de linha por vírgula
    .split(",")           // Divide a string por vírgula
    .map(item => item.trim())  // Remove espaços extras de cada item
    .filter(item => item.length > 0); // Remove itens vazios

  return (
    <div className="instrucoes-receitas">
      <div className="instrucoes-conteudo">
        <div className="introducao">
          <p className="p-cima">RECEITAS</p>
          <h1>{receita.titulo}</h1>
          <p className="p-baixo">
            Bem-vindo ao Delícias do DCC, onde os sonhos culinários ganham vida! Hoje,
            embarcamos em uma jornada de sabores com um prato que promete elevar sua
            experiência gastronômica – nossa Delícia de Infusão Cítrica: {receita.titulo}.
          </p>
          <Button
            sx={{
              color: "#262522",
              borderColor: "#262522",
              borderRadius: "24px",
              border: "1px solid #262522",
              fontSize: "14px",
              fontFamily: "Roboto",
            }}
            variant="outlined"
            onClick={handleFavoritar} // Chama a função quando o botão for clicado
          >
            FAVORITAR ESSA RECEITA
          </Button>
          <img
            style={{ width: "100%", maxWidth: "1232px", borderRadius: "24px" }}
            src={receita.url_imagem}
            alt={receita.titulo}
          />
        </div>
        <div className="passos">
          <div className="passo-instrucao">
            <h2>INSTRUÇÕES</h2>
            <p>{receita.instucoes}</p>
            <h3>MODO DE PREPARO</h3>
            <p>{receita.modo_preparo}</p>
          </div>
          <div className="passo-ingrediente">
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#FFFBF2",
                border: "1px solid #2625223D",
                borderRadius: "24px",
                padding: "20px",
                width: "100%",
                maxWidth: "428px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "15px",
                marginBottom: "20px",
              }}
            >
              <h2>INGREDIENTES</h2>
              <ul>
                {ingredientes.map((ingrediente, index) => (
                  <li key={index}>{ingrediente}</li>
                ))}
              </ul>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instrucoes;
