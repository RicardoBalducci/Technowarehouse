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
  //faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <div className={styles.portada}>
          <FontAwesomeIcon icon={faUser} className={styles.icon_bar} />
          <h1>Bienvenido</h1>
        </div>
        <ul>
          <Link to="/PrincipalAdmin">
            <li>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />{" "}
              Principal
            </li>
          </Link>
          <Link to="/Products">
            <li>
              {" "}
              <FontAwesomeIcon icon={faBox} className={styles.icon} /> Productos
            </li>
          </Link>
          <Link to="/Products">
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faTruckField}
                className={styles.icon}
              />{" "}
              Proveedores
            </li>
          </Link>
          <Link to="/">
            <li>
              <FontAwesomeIcon icon={faInbox} className={styles.icon} /> Salida
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
/*

          <Link to="/ProductsIngresar">
            <li>
              <FontAwesomeIcon icon={faSignOut} className={styles.icon} />
              Registrar
            </li>
          </Link>
          <Link to="/ProductsModificar">
            <li>
              <FontAwesomeIcon icon={faSignOut} className={styles.icon} />
              Modificar
            </li>
          </Link>

<div className={styles.sidebar}>
      <nav>
        <div className={styles.portada}>
          <FontAwesomeIcon icon={faUser} className={styles.icon_bar} />
          <h1>Bienvenido</h1>
        </div>
        <ul>
          <li>
            <Link to="/PrincipalAdmin">
              <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
            </Link>
          </li>
          <li>
            <Link to="/PrincipalAdmin">
              <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} />
              About
            </Link>
          </li>
          
          <li>
            <FontAwesomeIcon icon={faUsers} className={styles.icon} /> Usuarios
            <ul className={styles.submenu}>
              <li>
                <Link to="PrincipalAdmin">
                  <FontAwesomeIcon
                    icon={faUser}
                    className={styles.submenu_icon}
                  />
                  Registrar
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />{" "}
              Salida
            </Link>
          </li>
        </ul>
      </nav>
    </div>
*/
