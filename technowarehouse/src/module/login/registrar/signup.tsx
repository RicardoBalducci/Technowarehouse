import { useState } from "react";
import Swal from "sweetalert2";
import { Tables } from "../../../types/core";
import { insertData } from "../../../services/supabase";
import { useNavigate } from "react-router-dom";
import Footer from "../../portada/components/Footer";
import Cabecera from "../../portada/components/Cabecera";
function SignIn() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    cedula: "",
    nombre: "",
    password: "",
    telefono: "",
    direccion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(values);

    const response = await insertData(Tables.user, values);

    if (!response) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error",
      });
      return;
    }

    Swal.fire({
      title: "Buen trabajo",
      text: "Registro exitoso",
      icon: "success",
    });

    navigate("/login");
  };

  return (
    <>
      <Cabecera />
      <h1>Registrarse</h1>
      <form action="" onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <p>Cedula</p>
        <input
          type="text"
          name="cedula"
          value={values.cedula}
          onChange={handleChange}
        />
        <p>nombre</p>
        <input
          type="text"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
        />
        <p>Password</p>
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
        />

        <p>Telefono</p>
        <input
          type="text"
          name="telefono"
          value={values.telefono}
          onChange={handleChange}
        />
        <p>direccion</p>
        <input
          type="text"
          name="direccion"
          value={values.direccion}
          onChange={handleChange}
        />
        <button>Boton</button>
      </form>

      <Footer />
    </>
  );
}

export default SignIn;
