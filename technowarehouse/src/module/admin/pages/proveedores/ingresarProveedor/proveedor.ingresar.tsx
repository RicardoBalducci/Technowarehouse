import FormProveedor from "./components/form.ingresar.proveedor";
import Menu from "../../components/menu";
import styles from "./proveedor.ingresar.module.css";

function IngresarProveedor() {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <Menu />
        </nav>
        <div className={styles.content}>
          <FormProveedor />
        </div>
      </div>
    </>
  );
}

export default IngresarProveedor;
/*

import { useNavigate } from "react-router-dom";
import styles from "./proveedores.admin.module.css";
import Menu from "../components/menu";
import TablaProveedor from "./components/tabla.proveedor";
function PanelProveedores() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Redirigir a la ruta deseada al hacer clic en el botón
    navigate("/ProveedoresIngresar");
  };
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <TablaProveedor />
        <button onClick={handleButtonClick} className={styles.btn}>
          Ingresar Producto
        </button>
      </div>
    </div>
  );
}

export default PanelProveedores;

*/
