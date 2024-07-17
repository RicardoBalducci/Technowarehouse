import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Mision from "./components/Mision";
import styles from "./styles.module.css";
function Portada() {
  return (
    <>
      <Cabecera />
      <div className={styles.Principal}>
        <div>
          <p className={styles.Titulo}>Bienvenidos a TechnoWarehouse</p>
          <p className={styles.Subtitulo}>
            Discover the latest and greatest in technology at our online store.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portada;
/*

*/
