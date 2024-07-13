import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Tables } from "../../../../../../types/core";
import { insertData } from "../../../../../../services/supabase";
import styles from "./form.ingresar.proveedor.module.css";
function FormProveedor() {
  const [values, setValues] = useState({
    name: "",
    rif: "",
    email: "",
    telefono: "",
  });

  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    const response = await insertData(Tables.proveedor, values);

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
        <h1 className={styles.enun}>Ingresar proveedor</h1>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.gridContainer}>
            <div>
              <p className={styles.titulo}>Nombre del proveedor</p>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ingrese el nombre del producto"
                required
              />
            </div>
            <div>
              <p className={styles.titulo}>rif</p>
              <input
                type="text"
                name="rif"
                value={values.rif}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ingrese el nombre del producto"
                required
              />
            </div>
            <div>
              <p className={styles.titulo}>Email</p>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ingrese el nombre del producto"
                required
              />
            </div>
            <div>
              <p className={styles.titulo}>Telefono</p>
              <input
                type="text"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ingrese el nombre del producto"
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
export default FormProveedor;
