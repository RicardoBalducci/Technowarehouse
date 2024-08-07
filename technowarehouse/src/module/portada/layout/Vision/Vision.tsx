import VisionImage from "../../../../assets/undraw_vision.svg";
import styles from "./Vision.module.css"; // Import the CSS file

function Vision() {
  return (
    <div className={styles.vision_container}>
      <h1 className={styles.vision_title}>Visión</h1>
      <div className={styles.vision_content}>
        <p className={styles.vision_description}>
          Nuestra visión es ser reconocidos como la empresa líder en el mercado
          de la venta de electrónica, ofreciendo productos de alta calidad y
          soluciones tecnológicas innovadoras. Nos esforzamos por anticiparnos a
          las necesidades del mercado y ofrecer productos que mejoren la vida de
          las personas, brindando una experiencia de compra excepcional y
          estableciendo relaciones duraderas con nuestros clientes. Buscamos ser
          referentes en el sector tecnológico, adaptándonos constantemente a los
          avances tecnológicos y ofreciendo productos que superen las
          expectativas de nuestros clientes.
        </p>
        <img className={styles.vision_image} src={VisionImage} alt="Misión" />
      </div>
    </div>
  );
}

export default Vision;
