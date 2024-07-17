import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Mision from "./components/Mision";
import Vision from "./components/vision";
import styles from "./styles.module.css";
function Portada() {
  return (
    <>
      <Cabecera />
      <div className={styles.Principal}>
        <div>
          <p className={styles.Titulo}>Bienvenidos a TechnoWarehouse</p>
          <p className={styles.Subtitulo}>
            Descubre lo último y lo mejor en tecnología en nuestra tienda
            online.
          </p>
        </div>
      </div>
      <Mision />
      <Vision />
      <Footer />
    </>
  );
}

export default Portada;
/*

*/
