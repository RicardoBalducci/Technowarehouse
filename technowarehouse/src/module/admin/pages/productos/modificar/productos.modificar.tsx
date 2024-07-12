import React from "react";
//import { Link } from "react-router-dom";
import styles from "../panel.product.module.css";
import Menu from "../../components/menu";
function ModificarProducto() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>Panel para modificar productos</div>
    </div>
  );
}

export default ModificarProducto;
