import styles from "./usuarios.module.css";
import Menu from "../components/menu";
import TablaUsuariosAdmin from "./tabla/tabla.usuario";

function UsuarioAdministrador() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>

      <div className={styles.content}>
        <p className={styles.h1}>Panel de Los Usuarios</p>
        <TablaUsuariosAdmin />
      </div>
    </div>
  );
}

export default UsuarioAdministrador;
