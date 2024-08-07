import styles from "./historial.module.css";
import Menu from "../components/menu";
import TablaHistorial from "./components/tablahistorial";

function Historial() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <p className={styles.h1}>Panel de Historial</p>
        <TablaHistorial />
      </div>
    </div>
  );
}

export default Historial;
