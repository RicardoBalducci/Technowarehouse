import { useNavigate } from "react-router-dom";
import styles from "./panel.product.module.css";
import Menu from "../components/menu";
import TablaProductos from "./components/tabla.product.admin";

function PanelProductos() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirigir a la ruta deseada al hacer clic en el botón
    navigate("/ProductsIngresar");
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <p className={styles.h1}>Panel de productos principal </p>
        <TablaProductos />

        <button onClick={handleButtonClick} className={styles.btn}>
          Ingresar Producto
        </button>
      </div>
    </div>
  );
}

export default PanelProductos;
