import { useState, ChangeEvent, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tables } from "../../../../types/core";
import { updateData, viewDataLogin } from "../../../../services/supabase";
import Swal from "sweetalert2";

function ModificarUsuario() {
  const navigate = useNavigate();
  const location = useLocation();
  const { editedUser } = location.state;

  const [userData, setUserData] = useState({
    nombre: editedUser.nombre,
    cedula: editedUser.cedula,
    email: editedUser.email,
    password: editedUser.password,
    telefono: editedUser.telefono,
    direccion: editedUser.direccion,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await updateData(Tables.user, userData, editedUser.id);

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
      const user = await viewDataLogin(
        Tables.user,
        editedUser.email,
        editedUser.password
      );
      navigate("/User", { replace: true, state: { user: user } });
    } catch (error) {
      alert("Error al guardar"); // Mostrar alerta de error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>nombre</p>
      <input
        type="text"
        name="nombre"
        value={userData.nombre}
        onChange={handleInputChange}
      />
      <p>cedula</p>
      <input
        type="text"
        name="cedula"
        value={userData.cedula}
        onChange={handleInputChange}
      />
      <p>Correo Electronico</p>
      <input
        type="text"
        name="email"
        value={userData.email}
        disabled
        onChange={handleInputChange}
      />
      <p>Telefono</p>
      <input
        type="text"
        name="telefono"
        value={userData.telefono}
        onChange={handleInputChange}
      />
      <p>Contraseña</p>
      <input
        type="text"
        name="password"
        value={userData.password}
        disabled
        onChange={handleInputChange}
      />
      <p>Direccion</p>
      <input
        type="text"
        name="direccion"
        value={userData.direccion}
        onChange={handleInputChange}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ModificarUsuario;
