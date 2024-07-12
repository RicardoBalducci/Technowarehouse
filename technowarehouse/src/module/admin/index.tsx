import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    navigate("/PrincipalAdmin", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.contenedor}>
        <h1>Admin Panel</h1>
        <p>Welcome to the admin panel!</p>
        <input
          type="text"
          id="email"
          className={styles.input}
          placeholder="Ingrese email"
        />
        <input
          type="password"
          id="password"
          className={styles.input}
          placeholder="Ingrese contraseña"
        />
        <button className={styles.boton} onClick={handleButtonClick}>
          Ingresar
        </button>
      </div>
    </div>
  );
}
export default Admin;
