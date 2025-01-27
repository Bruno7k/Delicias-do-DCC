import "./navBar.css";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/logoDCC.png";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

function NavBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  const [userInfo, setUserInfo] = useState({
    nome: user.nome,
    email: user.email,
    senha: user.senha,
    receitas_favoritas: user.receitas_favoritas,
  });
  const searchRef = useRef(null);
  const { idUser } = useParams();

  const navigate = useNavigate(); // Cria a instância do navigate
  const location = useLocation(); // Obtém a localização atual

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

  const atualizarUsuario = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://127.0.0.1:8000/usuario/update/" + user.id,
        userInfo
      );

      if (response.status === 200) {
        const data = {
          id: response.data.id,
          nome: response.data.nome,
          email: response.data.email,
          senha: response.data.senha,
          receitas_favoritas: response.data.receitas_favoritas,
        };

        localStorage.setItem("user", JSON.stringify(data));
      }
    } catch (error) {
      alert("Email ou senha incorretos");
      console.error(error);
    }

    console.log(userInfo);
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchVisible(false);
    }
  };

  const handleInputChange = (e) => {
    const nome = e.target.getAttribute("nome"); // Usa o atributo 'nome' em vez de 'name'
    const value = e.target.value;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [nome]: value, // Atualiza o estado com base no 'nome'
    }));
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
        className="container-canto-direito"
        style={{ display: "flex", alignItems: "center" }}
      >
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

        <AccountCircleIcon className="icone-conta" onClick={toggleModal} />
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <h2>Editar Informações do Usuário</h2>
            <form className="modal-form">
              <label>
                Nome Completo:
                <input
                  type="text"
                  nome="nome" // Especifica qual campo do estado será alterado
                  placeholder="Digite seu nome completo"
                  value={userInfo.nome} // Ligado ao estado
                  onChange={handleInputChange} // Atualiza o estado conforme o usuário digita
                />
              </label>
              <label>
                E-mail:
                <input
                  type="email"
                  nome="email" // Especifica qual campo do estado será alterado
                  placeholder="Digite seu e-mail"
                  value={userInfo.email} // Ligado ao estado
                  onChange={handleInputChange} // Atualiza o estado conforme o usuário digita
                />
              </label>
              <label>
                Senha:
                <input
                  type="password"
                  nome="senha" // Especifica qual campo do estado será alterado
                  placeholder="Digite sua nova senha"
                  value={userInfo.senha} // Ligado ao estado
                  onChange={handleInputChange} // Atualiza o estado conforme o usuário digita
                />
              </label>
              <button type="submit" onClick={atualizarUsuario}>
                Salvar
              </button>
              <button type="button" onClick={toggleModal}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
