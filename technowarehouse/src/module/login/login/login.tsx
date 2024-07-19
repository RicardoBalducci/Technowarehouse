import { useState } from "react";
import { viewDataLogin } from "../../../services/supabase"; // Import the viewDataLogin function
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Tables } from "../../../types/core";
import Footer from "../../portada/components/Footer";
import Cabecera from "../../portada/components/Cabecera";
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
    </>
  );
}

export default Login;
