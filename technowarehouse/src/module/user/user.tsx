import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./user.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuUser from "./components/menu";
import Footer from "../portada/components/Footer";

function UserPrincipal() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state; // Obtener el usuario desde el estado de la ubicación
  const [editedUser] = useState(user); // Guardar el usuario en el estado

  const handleEditClick = () => {
    navigate("/ModificarUser", { state: { editedUser } }); // Pasar editedUser como parte del estado al navegar a la página "/ModificarUser"
  };

  return (
    <>
      <MenuUser />
      <div className={styles.container}>
        <div className={styles.lateral}>
          <FontAwesomeIcon icon={faUser} className={styles.user_icon} />
          <p className={styles.TxtBienvenida}>{user.nombre}</p>
        </div>
        <div className={styles.informacion}>
          <h1 className={styles.titulo}>Información</h1>
          <div className={`${styles.inlineInputs}`}>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Nombre</p>
              <input
                type="text"
                name="nombre"
                value={editedUser.nombre}
                className={styles.input}
                disabled
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Correo Electrónico</p>
              <input
                type="text"
                name="email"
                value={editedUser.email}
                className={styles.input}
                disabled
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Cédula</p>
              <input
                type="text"
                name="cedula"
                value={editedUser.cedula}
                className={styles.input}
                disabled
              />
            </div>
          </div>
          <div className={`${styles.inlineInputss}`}>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Teléfono</p>
              <input
                type="text"
                name="telefono"
                value={editedUser.telefono}
                className={styles.input}
                disabled
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Dirección</p>
              <input
                type="text"
                name="direccion"
                value={editedUser.direccion}
                className={styles.input}
                disabled
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Contraseña</p>
              <input
                type="text"
                name="password"
                value={editedUser.password}
                className={styles.input}
                disabled
              />
            </div>
          </div>
          <div className={styles.BtnGrupo}>
            <button onClick={handleEditClick} className={styles.Boton}>
              Modificar
            </button>
          </div>
        </div>
      </div>
      <div style={{ margin: "90px 0 0 0" }} /> {/* Separación */}
      <div className={styles.footer}>
        <p></p>
        <Footer />
      </div>
    </>
  );
}

export default UserPrincipal;
