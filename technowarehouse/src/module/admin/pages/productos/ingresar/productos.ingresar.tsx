import React from "react";
//import { Link } from "react-router-dom";
import styles from "../panel.product.module.css";
import Menu from "../../components/menu";
import FormProduct from "./components/form.ingresar.producto";
function IngresarProductos() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Menu />
      </nav>
      <div className={styles.content}>
        <FormProduct />
      </div>
    </div>
  );
}

export default IngresarProductos;
