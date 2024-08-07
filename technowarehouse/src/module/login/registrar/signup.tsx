import { useState } from "react";
import Swal from "sweetalert2";
import { Tables } from "../../../types/core";
import { insertData } from "../../../services/supabase";
import { useNavigate } from "react-router-dom";
import logoImage from "../../../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faIdCard,
  faLocationDot,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Cambiado a free-solid-svg-icons

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
      <div className={styles.container}>
        <center>
          <div className={styles.wrapper}>
            <div className={styles.lad_logo}>
              <img className={styles.logo} src={logoImage} alt="Logo" />
              <h1>TECHNO WAREHOUSE</h1>
              <p className={styles.etiqueta}>
                © 2024 Techno Warehouse. Todos los derechos reservados.
              </p>
            </div>
            <div className={styles.login}>
              <form action="" onSubmit={handleSubmit}>
                <h2 className={styles.h2}>REGISTRARSE</h2>
                <div className={styles.input_box}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icono} />
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ingrese su correo electrónico"
                    required
                  />
                </div>
                <div className={styles.input_box}>
                  <FontAwesomeIcon icon={faIdCard} className={styles.icono} />
                  <input
                    type="text"
                    name="cedula"
                    value={values.cedula}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ingrese su número de cédula"
                    required
                  />
                </div>
                <div className={styles.input_box}>
                  <FontAwesomeIcon icon={faUser} className={styles.icono} />
                  <input
                    type="text"
                    name="nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>
                <div className={styles.input_box}>
                  <FontAwesomeIcon icon={faLock} className={styles.icono} />
                  <input
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>
                <div className={styles.input_box}>
                  <FontAwesomeIcon icon={faPhone} className={styles.icono} />
                  <input
                    type="text"
                    name="telefono"
                    value={values.telefono}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ingrese su número de teléfono "
                    required
                  />
                </div>
                <div className={styles.input_box}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.icono}
                  />
                  <input
                    type="text"
                    name="direccion"
                    value={values.direccion}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Ingrese su dirección"
                    required
                  />
                </div>
                <button className={styles.button}>Aceptar</button>
                <div className={styles.register_link}>
                  <p>
                    ¿Ya tiene cuenta?{" "}
                    <a href="/login" className={styles.a}>
                      Iniciar sesión
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default SignIn;
