import styles from "../panel.product.module.css";
import Menu from "../../components/menu";

import FormModificar from "./components/form.modificar";
function ModificarProducto() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <FormModificar />
      </div>
    </div>
  );
}

export default ModificarProducto;

/*
import { useLocation } from "react-router-dom";

function ModificarProducto() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const price = queryParams.get("precio");
  const descripcion = queryParams.get("descripcion");
  const stock = queryParams.get("stock");
  const proveedor = queryParams.get("proveedor");
  const image = queryParams.get("image");

  return (
    <div>
      <h1>Datos del producto</h1>
      <p>Nombre: {name}</p>
      <p>Precio: {price}</p>
      <p>Descripción: {descripcion}</p>
      <p>Stock: {stock}</p>
      <p>Proveedor: {proveedor}</p>
      <p>Imagen: {image}</p>
    </div>
  );
}

export default ModificarProducto;
*/
