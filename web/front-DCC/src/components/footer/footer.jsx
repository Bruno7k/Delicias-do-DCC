import React from "react";
import logo from "../../assets/logoDCCPreta.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Divider from '@mui/joy/Divider';
import "./footer.css";
import { useMediaQuery } from "@mui/material";
function Footer() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return(
        <div className="footer">
            <div className="footer-cima">
                <div className="footer-logo">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <div className="footer-links">
                    <a href="/home"> HOME </a>
                    <Divider orientation= {isMobile ? "horizontal" : "vertical"} sx={{ backgroundColor: "#74726e"}} />
                    <a href="/receitas"> RECEITAS </a>
                    <Divider orientation={isMobile ? "horizontal" : "vertical"} sx={{ backgroundColor: "#74726e"}}/>
                    <a href="/favoritos"> MEUS FAVORITOS </a>
                    <Divider orientation="horizontal" sx={{display: isMobile ? "" : "none", backgroundColor: "#74726e"}}/>
                </div>
                <div className="footer-redes">
                    <FacebookIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
            </div>
            <Divider orientation="horizontal" sx={{width:"95%", alignSelf:"center", backgroundColor: "#74726e"}}/>
            <div className="footer-baixo">
                <p className="footer-texto">Copyright: © 2025 DELÍCIAS DO DCC LTDA.</p>
            </div>
        </div>
    );
}

export default Footer;