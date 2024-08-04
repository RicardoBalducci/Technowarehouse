import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./carrito.module.css";

function Carrito() {
  const location = useLocation();
  const { producto, cantidad } = location.state || {
    producto: null,
    cantidad: 0,
  };

  // Suponiendo que el precio está en el objeto producto
  const total = producto ? producto.precio * cantidad : 0;

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {producto ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{producto.name}</td>
              <td>{cantidad}</td>
              <td>{producto.precio} $</td>
              <td>{total.toFixed(2)} $</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      <h2>Total: {total.toFixed(2)} $</h2>
    </div>
  );
}

export default Carrito;

/*

 
}

*/

/*
import { useLocation } from "react-router-dom";

function Carrito() {
  const location = useLocation();
  const { producto, cantidad } = location.state || {};

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {producto && cantidad && (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{producto.name}</td>
              <td>${producto.precio}</td>
              <td>{cantidad}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
export default Carrito;
*/
