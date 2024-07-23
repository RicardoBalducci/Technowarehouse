import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faRocket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./mision.module.css"; // Importa los estilos CSS
import portadaImage from "../../../../assets/portada01.jpg"; // Importa la imagen

function Mision() {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  /*AComodar esto, quiero que mision y vision esten una al lado de otra */
  return (
    <div className={styles.mision}>
      <div onClick={handleClick} className={styles.Portada}>
        <FontAwesomeIcon icon={faBullseye} className={styles.icon} />
        <h1 className={styles.Titulo}>Misión</h1>
      </div>
      {showInfo && (
        <div className={styles.info}>
          <div className={styles.textoImagen}>
            <p className={styles.Texto}>
              Nuestra misión es ser líderes en el mercado de la venta de
              electrónica, ofreciendo productos de alta calidad y soluciones
              tecnológicas innovadoras. Nos esforzamos por satisfacer las
              necesidades de nuestros clientes, brindando un excelente servicio
              al cliente y manteniéndonos a la vanguardia de las últimas
              tendencias tecnológicas. Buscamos proporcionar productos que
              mejoren la vida de las personas y faciliten su día a día,
              ofreciendo una amplia gama de opciones para adaptarnos a las
              necesidades individuales de cada cliente.
            </p>
            <div>
              <img src={portadaImage} alt="Portada" className={styles.Imagen} />
            </div>
          </div>
        </div>
      )}
      <div onClick={handleClick} className={styles.Portada}>
        <FontAwesomeIcon icon={faRocket} className={styles.icon} />
        <h1 className={styles.Titulo}>Visión</h1>
      </div>
      {showInfo && (
        <div className={styles.info}>
          <div className={styles.textoImagen}>
            <p className={styles.Texto}>
              Nuestra visión es ser reconocidos como la empresa líder en el
              mercado de la venta de electrónica, ofreciendo productos de alta
              calidad y soluciones tecnológicas innovadoras. Nos esforzamos por
              anticiparnos a las necesidades del mercado y ofrecer productos que
              mejoren la vida de las personas, brindando una experiencia de
              compra excepcional y estableciendo relaciones duraderas con
              nuestros clientes. Buscamos ser referentes en el sector
              tecnológico, adaptándonos constantemente a los avances
              tecnológicos y ofreciendo productos que superen las expectativas
              de nuestros clientes.
            </p>
            <div>
              <img src={portadaImage} alt="Portada" className={styles.Imagen} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mision;
/*
 <button onClick={handleClick}>
        <FontAwesomeIcon icon={faBullseye} />
        <h1>Mision</h1>
      </button>
      {showInfo && (
        <>
          <h1>Mision</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            repellat tempore labore at, facere cumque voluptate earum voluptas
            eius sed expedita dolore quae minus praesentium itaque. Quibusdam
            perspiciatis veritatis nostrum.
          </p>
          <img src={portadaImage} alt="Portada" />{" "}
          </>
        )}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBullseye, faRocket } from "@fortawesome/free-solid-svg-icons";
    <FontAwesomeIcon icon={faRocket} />{" "}
*/
