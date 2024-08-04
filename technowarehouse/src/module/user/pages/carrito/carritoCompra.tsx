import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./carrito.module.css";
import Cabecera from "../../components/menu";
import Footer from "../../../portada/components/Footer";

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

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
      <h1>Carrito de Compras</h1>
      {carrito.length > 0 ? (
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
      <h2>Total: {total.toFixed(2)} $</h2>
      <button onClick={limpiarCarrito} className={styles.btn}>
        Limpiar Carrito
      </button>
      <Footer />
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
