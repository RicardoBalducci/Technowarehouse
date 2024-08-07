import React from "react";
import MisionImage from "../../../../assets/undraw_mision.svg";
import styles from "./Mision.module.css"; // Import the CSS file

function Mision() {
  return (
    <div className={styles.mision_container}>
      <h1 className={styles.mision_title}>Misión</h1>
      <div className={styles.mision_content}>
        <p className={styles.mision_description}>
          Nuestra misión es ser líderes en el mercado de la venta de
          electrónica, ofreciendo productos de alta calidad y soluciones
          tecnológicas innovadoras. Nos esforzamos por satisfacer las
          necesidades de nuestros clientes, brindando un excelente servicio al
          cliente y manteniéndonos a la vanguardia de las últimas tendencias
          tecnológicas. Buscamos proporcionar productos que mejoren la vida de
          las personas y faciliten su día a día, ofreciendo una amplia gama de
          opciones para adaptarnos a las necesidades individuales de cada
          cliente.
        </p>
        <img className={styles.mision_image} src={MisionImage} alt="Misión" />
      </div>
    </div>
  );
}

export default Mision;
