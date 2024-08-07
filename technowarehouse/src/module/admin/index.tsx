import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/supabase"; // Import the login function
import Swal from "sweetalert2";

function Admin() {
  const navigate = useNavigate(); //Constante para poder navegar
  const handleButtonClick = async () => {
    //funcion al hacer click en el boton
    const emailInput = document.getElementById("email") as HTMLInputElement; //adquirimos los datos de email
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement; //y contraseña

    if (emailInput && passwordInput) {
      const email = emailInput.value; //guardamos en variables
      const password = passwordInput.value; //guardamos en variables

      try {
        const user = await login({ email, password }); //llamamos al metodo login
        if (user) {
          //si es verdad me redirecciona
          navigate("/PrincipalAdmin", { replace: true });
        } else {
          //si no me muestra mensaje de error
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verifique email o contraseña",
          });
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      alert("An error occurred. Please try again.");
    }
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
