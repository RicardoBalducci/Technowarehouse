import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Productos from "./components/productos/productos";

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

      <Footer />
    </>
  );
}

export default Portada;
/*
import Mision from "./components/Mision";
import Vision from "./components/vision";
<Mision />
      <Vision />
*/
