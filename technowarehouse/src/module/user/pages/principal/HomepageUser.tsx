import Cabecera from "../../components/menu";
import { useEffect, useState } from "react";
import { supabase } from "../../../../services/supabase";
import { Tables } from "../../../../types/core";
import { Product } from "../../../../interface/Product.interface";

import styles from "./homepage.module.css";
import { useNavigate } from "react-router-dom";
function HomePageUser() {
  const [productos, setProductos] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  //const navigate = useNavigate();
  useEffect(() => {
    async function fetchProductos() {
      const { data, error } = await supabase
        .from(Tables.product)
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.error(error);
      } else {
        setProductos(data);
      }
    }

    fetchProductos();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    navigate(`/Informacion?id=${product.id}`);
  };
  return (
    <>
      <Cabecera />

      {selectedProduct && <h1>Selected Product: {selectedProduct.name}</h1>}
      <div className={styles.containerPrincipal}>
        <h1 className={styles.Titulo}>Productos Destacados</h1>
        <h5>Modificar a lo que haga adrian</h5>
        <div className={styles.productosContainer}>
          {productos.map((producto) => (
            <div key={producto.id} className={styles.producto}>
              <div className={styles.CenterImg}>
                <img
                  src={producto.image}
                  alt={producto.name}
                  className={styles.img}
                />
              </div>
              <div className={styles.cuadro}>
                <h2 className={styles.Nombre}>{producto.name}</h2>
                <h3 className={styles.Descripcion}>
                  {producto.description.length > 100
                    ? `${producto.description.substring(0, 100)}...`
                    : producto.description}
                </h3>{" "}
                <div className={styles.contenedor}>
                  <h3 className={styles.Precio}>${producto.precio}</h3>
                  <button
                    className={styles.button}
                    onClick={() => handleProductClick(producto)}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePageUser;
