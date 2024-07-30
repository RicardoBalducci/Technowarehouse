import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tables } from "../../../../types/core";
import { Product } from "../../../../interface/Product.interface";
import { supabase } from "../../../../services/supabase";
import Cabecera from "../../components/menu";
import styles from "./informacion.module.css";
import Footer from "../../../portada/components/Footer";

function Informacion() {
  const navigate = useNavigate();
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [cantidad, setCantidad] = useState<number | null>(null);

  const handleCantidadChange = () => {
    const nuevoStock = (product?.stock ?? 0) - (cantidad ?? 0);

    if (nuevoStock !== null && nuevoStock !== undefined) {
      navigate("/Carrito", {
        state: { producto: product, cantidad: cantidad },
      });
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

  return (
    <div>
      <Cabecera />
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
          <p className={styles.P}>{product?.description}</p>
          <p className={styles.SubTitulo}>Marca: {product?.Marca}</p>
          <p className={styles.SubTitulo}>Costo</p>
          <p className={styles.P}>{product?.precio} $ </p>
          <p className={styles.P}>{CambioBs.toFixed(2)}Bs</p>
          <input
            type="number"
            className={styles.input}
            max={product?.stock}
            min={1}
            placeholder="Ingrese cantidad"
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
          <button onClick={handleCantidadChange} className={styles.btn}>
            Click Aqui
          </button>
        </div>
      </div>
      <Footer />
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
