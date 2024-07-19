import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../portada/components/Footer";
function UserPrincipal() {
  const location = useLocation();

  const { user } = location.state;
  const maskedPassword = user.password.replace(/./g, "*");

  return (
    <div>
      <h2>User Details</h2>
      <p>Email: {user.email}</p>
      <p>Name: {user.nombre}</p>
      <p>Cedula: {user.cedula}</p>
      <p>Telefono: {user.telefono}</p>
      <p>Direccion: {user.direccion}</p>
      <p>Contraseña: {maskedPassword}</p>

      {/* Mostrar otros datos del usuario según la estructura de los datos */}

      <Footer />
    </div>
  );
}

export default UserPrincipal;
/*

 id: number;
  nombre: string;
  cedula: string;
  email: string;
  password: string;
  telefono: string;
  direccion: string;
*/
