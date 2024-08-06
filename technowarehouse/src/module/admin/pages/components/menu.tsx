import styles from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHome,
  //faInfoCircle,
  faUser,
  faBox,
  faInbox,
  faTruckField,
  faCartArrowDown,
  //faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <div className={styles.portada}>
          <FontAwesomeIcon icon={faUser} className={styles.icon_bar} />
          <h1>Bienvenido</h1>{" "}
        </div>
        <ul>
          <Link to="/PrincipalAdmin">
            <li>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />{" "}
              <p className={styles.titulo}>Principal</p>
            </li>
          </Link>
          <Link to="/Products">
            <li>
              <FontAwesomeIcon icon={faBox} className={styles.icon} />{" "}
              <p className={styles.titulo}>Productos</p>
            </li>
          </Link>
          <Link to="/Proveedores">
            <li>
              <FontAwesomeIcon icon={faTruckField} className={styles.icon} />{" "}
              <p className={styles.titulo}>Proveedores</p>
            </li>
          </Link>
          <Link to="/Pedido">
            <li>
              <FontAwesomeIcon icon={faCartArrowDown} className={styles.icon} />{" "}
              <p className={styles.titulo}>Pedidos</p>
            </li>
          </Link>
          <Link to="/UsuariosAdmin">
            <li>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />{" "}
              <p className={styles.titulo}>Usuarios</p>
            </li>
          </Link>
          <Link to="/">
            <li>
              <FontAwesomeIcon icon={faInbox} className={styles.icon} />{" "}
              <p className={styles.titulo}>Salir</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
