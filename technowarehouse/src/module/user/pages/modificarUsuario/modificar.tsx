//import styles from "./modificar.module.css";
//

function ModificarUsuario() {
  return (
    <>
      <h1>hola</h1>
    </>
  );
}

export default ModificarUsuario;

//const { editedUser } = location.state; // Acceder a editedUser desde la ubicación (location) del componente

// Ahora puedes utilizar editedUser en esta página para mostrar o modificar los datos según sea necesario

/* 
const location = useLocation();<form action="">
        <div className={styles.inputGroup}>
          <p className={styles.p}>Nombre</p>
          <input
            type="text"
            name="nombre"
            value={editedUser.nombre}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.p}>Correo Electrónico</p>
          <input
            type="text"
            name="email"
            value={editedUser.email}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.p}>Cedula</p>
          <input
            type="text"
            name="cedula"
            value={editedUser.cedula}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.p}>Teléfono</p>
          <input
            type="text"
            name="telefono"
            value={editedUser.telefono}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.p}>Dirección</p>
          <input
            type="text"
            name="direccion"
            value={editedUser.direccion}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <p className={styles.p}>Contraseña</p>
          <input
            type="text"
            name="password"
            value={editedUser.password}
            className={styles.input}
          />
        </div>
      </form>*/

/*


import { supabase } from "../../../../services/supabase";
import { Tables } from "../../../../types/core";
import { updateData } from "../../../../services/supabase";
const handleSaveClick = async () => {
    try {
      const response = await updateData(Tables.user, editedUser, user.id);

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
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
*/
