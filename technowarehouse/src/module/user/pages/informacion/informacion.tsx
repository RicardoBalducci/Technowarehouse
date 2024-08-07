import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tables } from "../../../../types/core";
import { Product } from "../../../../interface/Product.interface";
import { supabase } from "../../../../services/supabase";
import Cabecera from "../../components/menu";
import styles from "./informacion.module.css";
import Footer from "../../../portada/components/Footer";
import { useContador } from "../../ts/contador";
import Error from "./components/error";
import Swal from "sweetalert2";

function Informacion() {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [cantidad, setCantidad] = useState<number | null>(null);
  const { contador, setContador } = useContador(); // Usar el contexto
  const [openError, setOpenError] = useState(false); // Estado para controlar la visualización del error

  const manejarClick = () => {
    setContador(contador + 1); // Aumentar el contador en el contexto
  };

  const handleCantidadChange = () => {
    // Validar que la cantidad no sea nula, 0 o menor
    if (!cantidad || cantidad <= 0) {
      setOpenError(true); // Mostrar el error
      return; // Salir de la función si la cantidad no es válida
    }

    const nuevoStock = (product?.stock ?? 0) - cantidad;
    manejarClick();

    if (nuevoStock >= 0) {
      // Guardar en localStorage
      const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
      carrito.push({ producto: product, cantidad });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      Swal.fire({
        title: "Excelente",
        text: "El producto ya se encuentra en el carrito",
        icon: "success",
      });
    } else {
      setOpenError(true); // Mostrar el error si no hay suficiente stock
    }
  };

  useEffect(() => {
    supabase
      .from(Tables.product)
      .select("*")
      .eq("id", productId)
      .then((response) => {
        if (response.data !== null) {
          setProduct(response.data[0]);
        }
      });
  }, [productId]);

  const CambioBs = product?.precio ? product.precio * 36.6667 : 0;

  const handleCloseError = () => {
    setOpenError(false); // Cerrar la alerta
  };

  return (
    <div>
      <Cabecera />
      <Error open={openError} handleClose={handleCloseError} />
      <div className={styles.container}>
        <div className={styles.cuadroImg}>
          <img
            src={product?.image}
            alt={product?.name}
            className={styles.img}
          />
        </div>
        <div className={styles.CuadroTxt}>
          <p className={styles.Titulo}>{product?.name}</p>
          <p className={styles.SubTitulo}>Descripcion</p>
          <p className={styles.Pe}>{product?.description}</p>
          <p className={styles.SubTitulo}>Marca: {product?.Marca}</p>
          <p className={styles.SubTitulo}>Costo</p>
          <p className={styles.Pe}>{product?.precio} $ </p>
          <p className={styles.Pe}>{CambioBs.toFixed(2)}Bs</p>
          <input
            type="number"
            className={styles.input}
            max={product?.stock}
            min={1}
            placeholder="Ingrese cantidad"
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
          <button onClick={handleCantidadChange} className={styles.btn}>
            Añadir al carrito
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Informacion;
/*// Actualizar la cantidad en la base de datos utilizando supabase
      supabase
        .from(Tables.product)
        .update({ stock: nuevoStock })
        .eq("id", productId)
        .then(() => {
          Swal.fire({
            title: "Felicidades!",
            text: "Compra exitosa",
            icon: "success",
          });
          navigate("/HomePageUser");
        });*/
/*
      <h1>{product?.name}</h1>
      <input
        type="number"
        max={product?.stock}
        min={1}
        onChange={(e) => setCantidad(Number(e.target.value))}
      />
      <button onClick={handleCantidadChange}>Click Aqui</button>


  const precio = product.precio; // Precio en dólares
  const tasaDeCambio = 36.5996; // Tasa de cambio actual (dólares a bolívares)
  const precioBs = precio * tasaDeCambio; // Precio en bolívares

      <p>Cantidad: {product.stock}</p>
      <p>Descripcion: {product.description}</p>
      <p>Price: ${precio}</p>
      <p>Precio: Bs{precioBs.toFixed(2)}</p>
      <p>Provedor: {product.proveedor}</p>
      <p>Marca: {product.Marca}</p>
*/
