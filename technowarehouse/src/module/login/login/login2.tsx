import styles from "./login.module.css";
import { useState } from "react";
import { viewDataLogin } from "../../../services/supabase"; // Import the viewDataLogin function
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Tables } from "../../../types/core";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleButtonClick = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const user = await viewDataLogin(Tables.user, email, password);

    try {
      if (user) {
        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(user));

        // Navigate to User page
        navigate("/User", { replace: true, state: { user: user } });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Verifique email o contraseña",
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifique email o contraseña",
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <center>
          <div className={styles.wrapper}>
            <div className={styles.lad_logo}>
              <img className={styles.logo} src="logo.png" alt="Logo" />
              <h1>TECHNO WAREHOUSE</h1>
              <p className={styles.etiqueta}>
                © 2024 Techno Warehouse. Todos los derechos reservados.
              </p>
            </div>
            <div className={styles.login}>
              <form action="" onSubmit={handleButtonClick}>
                <h2 className={styles.h2}>INICIAR SESIÓN</h2>
                <img
                  className={styles.access}
                  src="icono3.png"
                  alt="icono login"
                />
                <div className={styles.input_box}>
                  <input
                    id="value"
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    className={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <img
                    className={styles.icono}
                    src="icono1.png"
                    alt="icono email"
                  />
                </div>
                <div className={styles.input_box}>
                  <input
                    id="value"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <img
                    className={styles.icono}
                    src="icono2.png"
                    alt="icono password"
                  />
                </div>
                <button type="submit" className={styles.button}>
                  Acceder
                </button>
                <div className={styles.register_link}>
                  <p>
                    ¿Aún no tiene cuenta?{" "}
                    <a href="/SignIn" className={styles.a}>
                      Registrar
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

export default Login;

/*
<Cabecera />
      <h1>Login</h1>
      <form action="" onSubmit={handleButtonClick}>
        <p>User</p>
        <input
          type="email"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
      <Footer />
*/
