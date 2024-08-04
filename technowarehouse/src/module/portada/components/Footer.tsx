import React from "react";
import styles from "./footer.module.css"; // Asegúrate de que el nombre del archivo sea correcto
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Importar íconos de redes sociales

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <h1 className={styles.Texto}>
        © 2024 TechnoWarehouse. All rights reserved.
      </h1>
      <div className={styles.SocialMedia}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
/*
   <footer className={styles.Footer}>
      <div className={styles.Footer_content}>
        <div className={styles.Footer_section}>
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className={styles.Footer_section}>
          <h3>Contacto</h3>
          <p>Teléfono: 123-456-7890</p>
          <p>Email: info@ejemplo.com</p>
          <p>Dirección: Calle Ejemplo, Ciudad, País</p>
        </div>
        <div className={styles.Footer_section}>
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Footer_bottom}>
        <p>&copy; 2024 Nombre de la Empresa</p>
      </div>
    </footer>
*/
