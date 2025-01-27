import "./navBar.css";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logoDCC.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function NavBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const searchRef = useRef(null);
  const { idUser } = useParams();

  const navigate = useNavigate();  // Cria a instância do navigate
  const location = useLocation();  // Obtém a localização atual

  const handleLogoClick = () => {
    navigate(`/home/${idUser}`);  // Redireciona para a página '/home' quando o logo for clicado
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Componente-navBar">
      <div className="imagem-Nav">
        <img src={Logo} className="logo" alt="Logo" onClick={handleLogoClick} />
      </div>

      <div
        className={`hamburguer ${menuOpen ? "ativo" : ""} ${menuClosing ? "fechar" : ""}`}
        onClick={toggleMenu}
      >
        {menuOpen ? <CloseIcon className="icone-fechar" /> : <MenuIcon className="icone-hamburguer" />}
      </div>

      <div className={`texto-Nav ${menuOpen ? "visivel" : ""} ${menuClosing ? "fechar" : ""}`}>
        {/* HOME */}
        <Link
          to={`/home/${idUser}`}
          className={location.pathname === "/home" ? "ativo" : ""}
        >
          HOME
        </Link>
        {/* RECEITAS (Considerando o caso de rota dinâmica) */}
        <Link
          to={`/receitas/17/${idUser}`}
          className={location.pathname.startsWith("/receitas") ? "ativo" : ""}
        >
          RECEITAS
        </Link>
        {/* MEUS FAVORITOS */}
        <Link
           to={`/favoritos/${idUser}`}
          className={location.pathname === "/favoritos" ? "ativo" : ""}
        >
          MEUS FAVORITOS
        </Link>
      </div>

      <div
        className={`procura-nav ${searchVisible ? "expandido" : ""}`}
        ref={searchRef}
        onClick={toggleSearch}
      >
        {!searchVisible && <SearchIcon className="icone-lupa" />}
        {searchVisible && (
          <input
            type="text"
            className={`campo-pesquisa ${searchVisible ? "visivel" : ""}`}
            placeholder="Pesquisar receitas..."
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
