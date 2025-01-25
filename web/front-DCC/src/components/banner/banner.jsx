 import bannerImg from '../../assets/foto-banner.png'
 import './banner.css'
 import React from 'react'
 function banner() { 
    return(  
    <div className='Componente-foto'>
        <img src={bannerImg} className="banner" alt="logo"/>
        <div className='Componente-texto'>
          <p className='titulo'>Desperte a sua Excelência Culinária</p>
          <div className='linha'>
            <p className='subtitulo'>Explore um mundo de sabores, descubra receitas artesanais e deixe o aroma da nossa paixão pela cozinha invadir sua casa.</p>
          </div>
          <button className='botao-receita'>Conheça nossas receitas</button>
        </div>
      </div>
    )
 }
 export default banner