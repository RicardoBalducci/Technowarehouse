import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./menu.module.css";
const MenuUser = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={styles.Cabecera}>
      <h1 className={styles.Cabecera_h1}>
        <a href="/User" className={styles.Cabecera_a}>
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
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className={styles.Cabecera_ul}>
          <li className={styles.Cabecera_li}>
            <a href="/" className={styles.Cabecera_a}>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="Icono"
              />
              Cerrar sesión
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MenuUser;

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
