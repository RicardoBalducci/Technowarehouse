import styles from "./form.product.module.css";
import { Tables } from "../../../../../../types/core";
import { useState } from "react";
import { insertData } from "../../../../../../services/supabase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SelectProveedor from "./select.proveedor";
function FormProduct() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
    proveedor: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await insertData(Tables.product, values);

    if (!response) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error",
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
              <p className={styles.titulo}>Precio</p>
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
                type="text"
                className={styles.input}
                name="image"
                value={values.image}
                onChange={handleChange}
                required
                placeholder="Ingrese una imagen"
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
