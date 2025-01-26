import "./navBar.css";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logoDCC.png";

function NavBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const searchRef = useRef(null);

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
        <img src={Logo} className="logo" alt="Logo" />
      </div>

      <div
        className={`hamburguer ${menuOpen ? "ativo" : ""} ${
          menuClosing ? "fechar" : ""
        }`}
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <CloseIcon className="icone-fechar" />
        ) : (
          <MenuIcon className="icone-hamburguer" />
        )}
      </div>

      <div
        className={`texto-Nav ${menuOpen ? "visivel" : ""} ${
          menuClosing ? "fechar" : ""
        }`}
      >
        <a
          href="/home"
          className={window.location.pathname === "/home" ? "ativo" : ""}
        >
          HOME
        </a>
        <a
          href="/receitas"
          className={window.location.pathname === "/receitas" ? "ativo" : ""}
        >
          RECEITAS
        </a>
        <a
          href="/favoritos"
          className={window.location.pathname === "/favoritos" ? "ativo" : ""}
        >
          MEUS FAVORITOS
        </a>
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
