import React, { useEffect, useState } from "react";
import { supabase } from "../../../../../services/supabase";
import { Tables } from "../../../../../types/core";
import { Product } from "../../../../../interface/Product.interface";
import ProductDetails from "./ProductDetails";
import styles from "./ProductList.module.css";
import { opcionesMarca } from "../../../../admin/pages/productos/ingresar/components/opciones";
import { opcionesCategoria } from "../../../../admin/pages/productos/ingresar/components/opcionCategoria";

const ProductList: React.FC = () => {
  const [productos, setProductos] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
  }, [selectedCategory]);

  const handleFilterClick = async (category: string) => {
    setSelectedCategory(category);
    setSearchTerm("");
    const { data, error } = await supabase
      .from(Tables.product)
      .select("*")
      .eq("Marca", category); // Assuming "Marca" is the column to filter by brand

    if (error) {
      console.error(error);
    } else {
      setProductos(data);
    }
  };

  const handleFilterClickCategory = async (category: string) => {
    setSelectedCategory(category);
    setSearchTerm("");
    const { data, error } = await supabase
      .from(Tables.product)
      .select("*")
      .eq("categoria", category); // Assuming "categoria" is the column to filter by category

    if (error) {
      console.error(error);
    } else {
      setProductos(data);
    }
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    setSelectedCategory(""); // Reset the selected category when the search term changes
  };

  const handleResetClick = async () => {
    const { data, error } = await supabase
      .from(Tables.product)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setProductos(data);
      setSelectedCategory("");
      setSearchTerm("");
      window.location.reload();
    }
  };

  const filteredProductos = productos.filter((producto) => {
    const productName = producto.name.toLowerCase();
    const marca = producto.Marca.toLowerCase();
    const categoria = producto.categoria.toLowerCase();

    return (
      (searchTerm === "" && selectedCategory === "") ||
      productName.includes(searchTerm.toLowerCase()) ||
      marca.includes(searchTerm.toLowerCase()) ||
      categoria.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className={styles.product_list_container}>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className={styles.input}
      />
      <select
        name="Marca"
        className={styles.input}
        required
        onChange={(e) => handleFilterClick(e.target.value)}
      >
        {opcionesMarca.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {opcion.label}
          </option>
        ))}
      </select>
      <select
        name="Categoria"
        className={styles.input}
        onChange={(e) => handleFilterClickCategory(e.target.value)}
      >
        {opcionesCategoria.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {opcion.label}
          </option>
        ))}
      </select>
      <button onClick={handleResetClick} className={styles.button}>
        Vaciar
      </button>{" "}
      <div className={styles.product_list}>
        {filteredProductos.length === 0 &&
        searchTerm !== "" &&
        selectedCategory === "" ? (
          <p>No se encontraron resultados.</p>
        ) : (
          filteredProductos.map((producto) => (
            <ProductDetails key={producto.id} product={producto} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;

/*

Audífonos

Teléfono

Tablet
*/
/*

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
*/
