//import { useNavigate } from "react-router-dom";
import styles from "./proveedores.admin.module.css";
import Menu from "../components/menu";
import IngresarProveedor from "./ingresarProveedor/proveedor.ingresar";
function PanelProveedores() {
  //const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <IngresarProveedor />
      </div>
    </div>
  );
}

export default PanelProveedores;
