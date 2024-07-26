import { useState } from "react";
import "../../portada/components/Cabecera.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { viewDataLogin } from "../../../services/supabase";
import { Tables } from "../../../types/core";
import { useNavigate } from "react-router-dom";
import Buscador from "../pages/descripcion/buscador";

const Cabecera = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const Prueba = async () => {
    // Assuming user.email and user.password are defined
    const user = { email: "t@gmail.com", password: "1" };
    const userData = await viewDataLogin(
      Tables.user,
      user.email,
      user.password
    );
    navigate("/User", { replace: true, state: { user: userData } });
  };

  return (
    <header className="Cabecera">
      <h1 className="Cabecera-h1">
        <a href="/PageProducts" className="Cabecera-a">
          Technowarehouse
        </a>
      </h1>

      <button onClick={toggleMenu} className="Cabecera-button">
        <svg
          className="Cabecera-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <Buscador />
      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <a href="/PageProducts" className="Cabecera-a">
              Products
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="/User" className="Cabecera-a">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="/User" onClick={Prueba} className="Cabecera-a">
              user
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="/" className="Cabecera-a">
              Cerrar Sesion
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecera;

/*
<li className="Cabecera-li">
            <a href="/login" className="Cabecera-a">
              Iniciar Sesion
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="/SignIn" className="Cabecera-a">
              Registrarse
            </a>
          </li>
*/
