import { useState } from "react";
import Swal from "sweetalert2";
import { Tables } from "../../../types/core";
import { insertData } from "../../../services/supabase";
import { useNavigate } from "react-router-dom";
import Footer from "../../portada/components/Footer";
import Cabecera from "../../portada/components/Cabecera";
import styles from "./signup.module.css";
function SignIn() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    cedula: "",
    nombre: "",
    password: "",
    telefono: "",
    direccion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(values);

    const response = await insertData(Tables.user, values);

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

    navigate("/login");
  };

  return (
    <>
      <Cabecera />
      <h1 className={styles.titulo}>Registrarse</h1>
      <div className={styles.container}>
        <form action="" onSubmit={handleSubmit} className={styles.formulario}>
          <p className={styles.p}>Email *</p>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={styles.input}
          />
          <p className={styles.p}>Cédula *</p>
          <input
            type="text"
            name="cedula"
            value={values.cedula}
            onChange={handleChange}
            className={styles.input}
          />
          <p className={styles.p}>Nombre *</p>
          <input
            type="text"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            className={styles.input}
          />
          <p className={styles.p}>Password</p>
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
            className={styles.input}
          />

          <p className={styles.p}>Teléfono </p>
          <input
            type="text"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            className={styles.input}
          />
          <p className={styles.p}>Dirección</p>
          <input
            type="text"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            className={styles.input}
          />
          <button className={styles.BTn}>Boton</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
