import { useEffect, useState } from "react";
import { supabase } from "../../../../services/supabase";
import { Tables } from "../../../../types/core";
import { Product } from "../../../../interface/Product.interface";
import styles from "./productos.module.css";
function Productos() {
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProductos() {
      const { data, error } = await supabase.from(Tables.product).select("*");
      if (error) {
        console.error(error);
      } else {
        setProductos(data);
      }
    }

    fetchProductos();
  }, []);
  //Colocar los contenedores uno al lado del otro
  return (
    <>
      <div className={styles.containerPrincipal}>
        <h1>Productos Destacados</h1>

        {productos.map((producto) => (
          <div key={producto.id}>
            <div className={styles.container}>
              <div className={styles.containerLeft}>
                <div className={styles.CenterImg}>
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className={styles.img}
                  />
                </div>
              </div>

              <div className={styles.containerRight}>
                <div className={styles.cuadro}>
                  <h2 className={styles.Nombre}>{producto.name}</h2>
                  <h3 className={styles.Descripcion}>{producto.description}</h3>
                  <div className={styles.contenedor}>
                    <h3 className={styles.Precio}>${producto.precio}</h3>
                    <button className={styles.button}>Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Productos;
