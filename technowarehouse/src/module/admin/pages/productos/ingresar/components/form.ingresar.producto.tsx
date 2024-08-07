import styles from "./form.product.module.css";
import { Tables } from "../../../../../../types/core";
import { useState } from "react";
import { insertData } from "../../../../../../services/supabase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SelectProveedor from "./select.proveedor";
import { supabase } from "../../../../../../services/supabase";
import { opcionesMarca } from "./opciones";
import { opcionesCategoria } from "./opcionCategoria";
function FormProduct() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    Marca: "",
    image: "",
    proveedor: "",
    categoria: "",
    precio: 0,
    stock: 0,
  });

  const handleProveedorChange = (selectedProveedorId: string) => {
    setValues({
      ...values,
      proveedor: selectedProveedorId, // Actualiza el proveedor seleccionado en el estado
    });
  };

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleMarcaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({
      ...values,
      Marca: e.target.value, // Actualiza la marca seleccionada en el estado
    });
  };
  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({
      ...values,
      categoria: e.target.value, // Actualiza la marca seleccionada en el estado
    });
  };
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const { data, error } = await supabase.storage
        .from("Technowarehouse")
        .upload("public/" + file.name, file);

      if (data) {
        const url = `https://dkmcywdlzsslpgnvfxzy.supabase.co/storage/v1/object/public/Technowarehouse/public/${file.name}`;
        console.log("La url es: ", url);
        setValues({
          ...values,

          image: url, // Save the uploaded image URL in the values state
        });
      } else if (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await insertData(Tables.product, values);

    if (!response) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error",
      });
      return;
    }

    Swal.fire({
      title: "Buen trabajo",
      text: "Registro exitoso",
      icon: "success",
    });
    navigate("/Products");
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.enun}>Ingresar producto</h1>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.gridContainer}>
            <div>
              <p className={styles.titulo}>Nombre del producto</p>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ingrese el nombre del producto"
              />
            </div>
            <div>
              <p className={styles.titulo}>Precio ($)</p>
              <input
                name="precio"
                value={values.precio}
                onChange={handleChange}
                type="number"
                className={styles.input}
                placeholder="Ingrese el precio del producto"
              />
            </div>
            <div>
              <p className={styles.titulo}>Cantidad de stock</p>
              <input
                name="stock"
                value={values.stock}
                onChange={handleChange}
                type="number"
                className={styles.input}
                placeholder="Ingrese la cantidad de stock"
              />
            </div>
            <div>
              <p className={styles.titulo}>Proveedor</p>

              <SelectProveedor onProveedorChange={handleProveedorChange} />
            </div>
            <div>
              <p className={styles.titulo}>Imagen</p>
              <input
                type="file"
                className={styles.input}
                name="image"
                onChange={handleImageUpload}
                required
              />
            </div>
            <div>
              <p className={styles.titulo}>Descripción</p>
              <input
                name="description"
                value={values.description}
                className={styles.input}
                onChange={handleChange}
                type="text"
                placeholder="description"
                required
              />
            </div>
            <div>
              <p className={styles.titulo}>Marca</p>
              <select
                name="Marca"
                value={values.Marca}
                onChange={handleMarcaChange}
                className={styles.input}
                required
              >
                {opcionesMarca.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className={styles.titulo}>Categoría</p>
              <select
                name="Categoria"
                value={values.categoria}
                onChange={handleCategoriaChange}
                className={styles.input}
                required
              >
                {opcionesCategoria.map((opcion) => (
                  <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className={"button"}>Guardar</button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className={"btnAtras"}
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
}
export default FormProduct;
