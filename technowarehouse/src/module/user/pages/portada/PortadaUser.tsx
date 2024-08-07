import Footer from "../../../portada/components/Footer";
import Contactanos from "../../../portada/layout/form/form";
import Mision from "../../../portada/layout/Mision/Mision";

import Vision from "../../../portada/layout/Vision/Vision";
import Cabecera from "../../components/menu";
import ProductosUser from "./components/productsportada";
import styles from "./portadaUser.module.css";
function PortadaUser() {
  return (
    <>
      <Cabecera />
      <div className={styles.Principal}>
        <div>
          <p className={styles.Titulo}>
            Descubre los últimos productos tecnológicos
          </p>
          <p className={styles.Subtitulo}>
            Explora nuestra selección de productos de vanguardia y encuentra el
            que se adapte a tus necesidades. Desde smartphones y laptops hasta
            accesorios de audio y más, tenemos todo lo que necesitas para
            mantenerte a la vanguardia de la tecnología.
          </p>
          <a href="/PageProducts" rel="noopener noreferrer">
            <button className={styles.Btn}>Comprar Ahora</button>
          </a>
        </div>
      </div>
      <ProductosUser />
      <div style={{ margin: "40px 0" }} /> {/* Separación */}
      <Mision />
      <div style={{ margin: "40px 0" }} /> {/* Separación */}
      <Vision />
      <div style={{ margin: "40px 0" }} /> {/* Separación */}
      <Contactanos />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default PortadaUser;
