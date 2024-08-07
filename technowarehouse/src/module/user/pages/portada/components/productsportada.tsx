import { useEffect, useState } from "react";
import { supabase } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import { Product } from "../../../../../interface/Product.interface";
import styles from "./productsportada.module.css";
import { useNavigate } from "react-router-dom";

function ProductosUser() {
  const [productos, setProductos] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProductos() {
      const { data, error } = await supabase
        .from(Tables.product)
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4);
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProductos(data);
      }
    }

    fetchProductos();
  }, []);

  const handleClick = (producto: Product) => {
    navigate(`/Informacion?id=${producto.id}`);
  };

  return (
    <div className={styles.containerPrincipal}>
      <h1 className={styles.Titulo}>Productos Destacados</h1>
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
              <div className={styles.contenedor}>
                <h3 className={styles.Precio}>${producto.precio}</h3>
                <button
                  className={styles.button}
                  onClick={() => handleClick(producto)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosUser;
