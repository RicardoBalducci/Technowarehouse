import { useState } from "react"; //useEffect
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./user.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuUser from "./components/menu";
function UserPrincipal() {
  const nagivate = useNavigate();
  const location = useLocation();
  const { user } = location.state;
  const [editedUser] = useState(user);

  const handleEditClick = () => {
    nagivate("/ModificarUser", { state: { editedUser } }); // Pasar editedUser como parte del estado al navegar a la página "/ModificarUser"
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
          <div className={`${styles.inlineInputs} `}>
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
              <p className={styles.p}>Cedula</p>
              <input
                type="text"
                name="cedula"
                value={editedUser.cedula}
                className={styles.input}
                disabled
              />
            </div>
          </div>
          <div className={`${styles.inlineInputss} `}>
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
    </>
  );
}
export default UserPrincipal;

/*
        
*/

/*import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../portada/components/Footer";
import styles from "./user.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MenuUser from "./components/menu";
import { supabase } from "../../services/supabase";

//import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  nombre: string;
  email: string;
  cedula: string;
  telefono: string;
  direccion: string;
  password: string;
  // Add other properties as needed
}
//MODIFICAR PARA el UPDATE, sea en otro lugar
function UserPrincipal() {
  const nagivate = useNavigate();
  const location = useLocation();
  const { user } = location.state;
  const [editedUser, setEditedUser] = useState(user); // State to store the changes made to the user
  //const navigate = useNavigate();

  //const maskedPassword = user.password.replace(/./g, "*");

  const handleEditClick = () => {
    nagivate("/ModificarUser", { state: { editedUser } }); // Pasar editedUser como parte del estado al navegar a la página "/ModificarUser"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser((prevUser: User) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("id", user.id);

        if (error) {
          throw new Error(error.message);
        }

        if (data && data.length > 0) {
          setEditedUser(data[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [user.id]);

  return (
    <>
      <MenuUser />
      <div className={styles.container}>
        <div className={styles.lateral}>
          <FontAwesomeIcon icon={faUser} className={styles.user_icon} />
          <p className={styles.TxtBienvenida}>Bienvenido {user.nombre}</p>
        </div>
        <div className={styles.informacion}>
          <h1 className={styles.titulo}>Información</h1>
          <div className={styles.inlineInputs}>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Nombre</p>
              <input
                type="text"
                name="nombre"
                value={editedUser.nombre}
                className={styles.input}
                disabled
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Cedula</p>
              <input
                type="text"
                name="cedula"
                value={editedUser.cedula}
                className={styles.input}
                disabled
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <p className={styles.p}>Teléfono</p>
              <input
                type="text"
                name="telefono"
                value={editedUser.telefono}
                className={styles.input}
                disabled
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button onClick={handleEditClick} className={styles.Boton}>
            Modificar
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserPrincipal;
*/
