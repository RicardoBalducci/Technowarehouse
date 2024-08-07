import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Contactanos from "./layout/form/form";
import Mision from "./layout/Mision/Mision";
import Productos from "./layout/producto/productos";
import Vision from "./layout/Vision/Vision";
import styles from "./styles.module.css";
function Portada() {
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
          <button className={styles.Btn}>Comprar Ahora</button>
        </div>
      </div>
      <Productos />
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

export default Portada;
/*
      
 <Productos />
      <Mision />
      <Vision />
      <p className={styles.p}></p>

      

import Vision from "./components/vision";
      <Vision />
*/
