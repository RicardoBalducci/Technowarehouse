import React, { useState, useEffect, ChangeEvent } from "react";
import { supabase } from "../../../../services/supabase";
import { Product } from "../../../../interface/Product.interface";
import { Tables } from "../../../../types/core";
import styles from "./buscador.module.css";

const Buscador: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultados, setResultados] = useState<Product[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    async function buscarEnBaseDeDatos() {
      if (inputValue.trim() !== "") {
        const { data, error } = await supabase
          .from(Tables.product)
          .select("*")
          .ilike("name", `%${inputValue}%`);

        if (error) {
          console.error(error);
        } else {
          setResultados(data);
        }
      } else {
        setResultados([]);
      }
    }

    buscarEnBaseDeDatos();
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar producto..."
        className={styles.input}
      />
      <div>
        <div className={styles.CuadroPrincipal}>
          {resultados.map((producto) => (
            <div key={producto.id} className={styles.cuadro}>
              <img
                src={producto.image}
                alt={producto.name}
                className={styles.img}
              />
              <p className={styles.titulo}> {producto.name}</p>
              <button className={styles.btn}>CLICK</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buscador;
