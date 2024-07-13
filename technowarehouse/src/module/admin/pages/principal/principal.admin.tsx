//import { Link } from "react-router-dom";
import styles from "./principal.admin.module.css";
import Menu from "../components/menu";
function PrincipalAdmin() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <h1>Panel de Control</h1>
        {/* Contenido de la página PrincipalAdmin */}
      </div>
    </div>
  );
}

export default PrincipalAdmin;
