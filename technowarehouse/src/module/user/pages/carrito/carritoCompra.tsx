import React, { useState, useEffect } from "react";
import { Product } from "../../../../interface/Product.interface";

function Carrito() {
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    const storedProductos = localStorage.getItem("productos");
    if (storedProductos) {
      setProductos(JSON.parse(storedProductos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const agregarProducto = (producto: Product) => {
    setProductos([...productos, producto]);
  };

  return (
    <div>
      <h1>Tienes un carrito de compras</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.name}</td>
              <td>{producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => agregarProducto({ name: "Producto 1", precio: "$10" })}
      >
        Agregar Producto
      </button>
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
