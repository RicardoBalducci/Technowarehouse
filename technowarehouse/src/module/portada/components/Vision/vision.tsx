import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "../Mision/mision.module.css"; // Importa los estilos CSS

import portadaImage from "../../../../assets/portada01.jpg"; // Importa la imagen

function Vision() {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className={styles.Vision}>
      <div onClick={handleClick} className={styles.Portada}>
        <FontAwesomeIcon icon={faRocket} className={styles.icon} />
        <h1 className={styles.Titulo}>Visión</h1>
      </div>
      <div className={styles.dividir}>
        {showInfo && (
          <div className={styles.info}>
            <div className={styles.textoImagen}>
              <p className={styles.Texto}>
                Nuestra visión es ser reconocidos como la empresa líder en el
                mercado de la venta de electrónica, ofreciendo productos de alta
                calidad y soluciones tecnológicas innovadoras. Nos esforzamos
                por anticiparnos a las necesidades del mercado y ofrecer
                productos que mejoren la vida de las personas, brindando una
                experiencia de compra excepcional y estableciendo relaciones
                duraderas con nuestros clientes. Buscamos ser referentes en el
                sector tecnológico, adaptándonos constantemente a los avances
                tecnológicos y ofreciendo productos que superen las expectativas
                de nuestros clientes.
              </p>
              <div>
                <img
                  src={portadaImage}
                  alt="Portada"
                  className={styles.Imagen}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Vision;
