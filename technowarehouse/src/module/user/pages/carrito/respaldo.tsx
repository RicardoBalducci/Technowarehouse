import React, { useState, useEffect } from "react";
import styles from "./carrito.module.css";
import Cabecera from "../../components/menu";
import Footer from "../../../portada/components/Footer";
import { CartItem } from "./interface/Carrito.interface";

function Carrito() {
  const [carrito, setCarrito] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    setCarrito(storedCarrito);
  }, []);

  const limpiarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  return (
    <div>
      <Cabecera />
      <h1 className={styles.h1}>Carrito de Compras</h1>
      {carrito.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Producto</th>
              <th className={styles.th}>Cantidad</th>
              <th className={styles.th}>Precio Unitario</th>
              <th className={styles.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item, index) => (
              <tr key={index}>
                <td>{item.producto.name}</td>
                <td>{item.cantidad}</td>
                <td>{item.producto.precio} $</td>
                <td>{(item.producto.precio * item.cantidad).toFixed(2)} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}

      {/* Small table for total */}
      <div className={styles.totalContainer}>
        <h2>Total</h2>
        <table className={styles.totalTable}>
          <tbody>
            <tr>
              <td>Total:</td>
              <td>{total.toFixed(2)} $</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={limpiarCarrito} className={styles.btn}>
        Limpiar Carrito
      </button>
      <Footer />
    </div>
  );
}

export default Carrito;
