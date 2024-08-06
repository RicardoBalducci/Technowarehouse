import styles from "./pedido.module.css";
import Menu from "../components/menu";
import TablaPedido from "./tabla/tabla.pedido";

function Pedido() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>

      <div className={styles.content}>
        <p className={styles.h1}>Panel de Pedido</p>
        <TablaPedido />
      </div>
    </div>
  );
}

export default Pedido;
