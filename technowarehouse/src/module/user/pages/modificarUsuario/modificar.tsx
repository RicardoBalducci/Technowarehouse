import { useState, ChangeEvent, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tables } from "../../../../types/core";

import { updateData, viewDataLogin } from "../../../../services/supabase";
import Swal from "sweetalert2";
import Cabecera from "../../components/menu";
import Footer from "../../../portada/components/Footer";
import styles from "./modificar.module.css";
function ModificarUsuario() {
  const navigate = useNavigate();
  const location = useLocation();
  const { editedUser } = location.state;

  const [userData, setUserData] = useState({
    nombre: editedUser.nombre,
    cedula: editedUser.cedula,
    email: editedUser.email,
    password: editedUser.password,
    telefono: editedUser.telefono,
    direccion: editedUser.direccion,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await updateData(Tables.user, userData, editedUser.id);

      if (!response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error",
        });

        console.log(response);
        return;
      }

      Swal.fire({
        title: "Buen trabajo",
        text: "Modificación exitosa",
        icon: "success",
      });
      const user = await viewDataLogin(
        Tables.user,
        editedUser.email,
        editedUser.password
      );
      navigate("/User", { replace: true, state: { user: user } });
    } catch (error) {
      alert("Error al guardar"); // Mostrar alerta de error
    }
  };

  return (
    <div>
      <Cabecera />
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.texto}>Modificar Usuario</h1>
          <div className={styles.cuadro}>
            <p>nombre</p>
            <input
              type="text"
              name="nombre"
              value={userData.nombre}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.cuadro}>
            <p>cedula</p>
            <input
              type="text"
              name="cedula"
              value={userData.cedula}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.cuadro}>
            <p>Correo Electronico</p>
            <input
              type="text"
              name="email"
              value={userData.email}
              disabled
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.cuadro}>
            <p>Telefono</p>
            <input
              type="text"
              name="telefono"
              value={userData.telefono}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.cuadro}>
            <p>Contraseña</p>
            <input
              type="text"
              name="password"
              value={userData.password}
              disabled
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <div className={styles.cuadro}>
            <p>Direccion</p>
            <input
              type="text"
              name="direccion"
              value={userData.direccion}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.btn}>
            Guardar
          </button>
        </form>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default ModificarUsuario;
