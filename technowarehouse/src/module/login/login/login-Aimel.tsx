import "./styles/login.css";
import "../public/icono1.png";
import "../public/icono2.png";
import "../public/icono3.png";

function Login() {
  return (
    <body>
      <div className="container">
        <center>
          <div className="wrapper">
            <div className="lado-logo">
              <img className="logo" src="logo.png" alt="Logo" />
              <h1>TECHNO WAREHOUSE</h1>
              <p className="etiqueta">
                © 2024 Techno Warehouse. Todos los derechos reservados.
              </p>
            </div>
            <div className="login">
              <form action="">
                <h2>INICIAR SESIÓN</h2>
                <img className="access" src="icono3.png" alt="icono login" />
                <div className="input-box">
                  <input
                    id="value"
                    type="text"
                    placeholder="Correo electrónico"
                    required
                  />
                  <img className="icono" src="icono1.png" alt="icono email" />
                </div>
                <div className="input-box">
                  <input
                    id="value"
                    type="password"
                    placeholder="Contraseña"
                    required
                  />
                  <img
                    className="icono"
                    src="icono2.png"
                    alt="icono password"
                  />
                </div>
                <button type="submit">Acceder</button>
                <div className="register-link">
                  <p>
                    ¿Aún no tiene cuenta? <a href="/">Registrar</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </center>
      </div>
    </body>
  );
}
export default Login;
