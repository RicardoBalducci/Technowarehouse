import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/supabase"; // Import the login function
import Swal from "sweetalert2";

function Admin() {
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;

    if (emailInput && passwordInput) {
      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        const user = await login({ email, password });
        if (user) {
          navigate("/PrincipalAdmin", { replace: true });
        } else {
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
