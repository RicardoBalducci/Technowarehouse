import styles from "../ingresarProveedor/proveedor.ingresar.module.css";
import Menu from "../../components/menu";
import FormModificarProveedor from "./components/form.modificar.proveedor";
//import FormModificar from "./components/form.modificar";
function ModificarProveedor() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <h1>Hola</h1>
        <FormModificarProveedor />
      </div>
    </div>
  );
}

export default ModificarProveedor;
