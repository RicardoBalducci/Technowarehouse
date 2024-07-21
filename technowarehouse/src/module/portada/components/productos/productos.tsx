import { useEffect, useState } from "react";
import { supabase } from "../../../../services/supabase";
import { Tables } from "../../../../types/core";
import { Product } from "../../../../interface/Product.interface";
import styles from "./productos.module.css";
import { useNavigate } from "react-router-dom";
function Productos() {
  const [productos, setProductos] = useState<Product[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProductos() {
      const { data, error } = await supabase
        .from(Tables.product)
        .select("*")
        .order("created_at", { ascending: false })
        .limit(4); // Fetch only the last 3 products
      if (error) {
        console.error(error);
      } else {
        setProductos(data);
      }
    }

    fetchProductos();
  }, []);

  const HandleClick = () => {
    navigate("/login");
  };
  //Colocar los contenedores uno al lado del otro
  return (
    <>
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
                <h3 className={styles.Descripcion}>
                  {producto.description.length > 100
                    ? `${producto.description.substring(0, 100)}...`
                    : producto.description}
                </h3>{" "}
                <div className={styles.contenedor}>
                  <h3 className={styles.Precio}>${producto.precio}</h3>
                  <button className={styles.button} onClick={HandleClick}>
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

export default Productos;
