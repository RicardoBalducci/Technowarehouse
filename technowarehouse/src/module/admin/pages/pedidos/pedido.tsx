import styles from "./pedido.module.css";
import Menu from "../components/menu";
function Pedido() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <p className={styles.h1}>Panel de Pedido </p>
      </div>
    </div>
  );
}
export default Pedido;
