import "./receitas.css";
import CardComponent from "../card/card";
import * as React from 'react';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {useMediaQuery} from "@mui/material";

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
function Receitas() {
    const mobile = useMediaQuery("(max-width: 432px)");
    return (
        <div className="receitas">
            <div className="receitas-text">
                <p>Receitas</p>
                <h1>EMBARQUE NESSA JORNADA</h1>
                <h3>Com nossa diversa coleção de receitas, temos algo para satisfazer todos os paladares.</h3>
            </div>
            <div className="receitas-cards">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid 
                        container 
                        spacing={{ xs: 2, sm: 2 }} 
                        columns={{ xs: 4, sm: 8, md: 12 }} 
                        justifyContent="center"
                        sx={{
                            '@media (max-width: 901px)': {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(1, 1fr)', // 1 coluna
                            },
                            '@media (min-width: 902px and max-width: 1330px)': {
                                // Layout para telas menores que 1311px
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)', // 2 colunas
                            },
                            '@media (min-width: 1330px)': {
                                // Layout para telas maiores que 1311px
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)', // 3 colunas    
                            },
                        }}
                    >
                        {info.map((item, index) => (
                            <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
                                <div className="receita-card">
                                    <CardComponent
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        width={mobile ? 250: 426}
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
