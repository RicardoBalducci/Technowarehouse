import { useLocation } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import { updateData } from "../../../../../../services/supabase";
import { Tables } from "../../../../../../types/core";
import "./form.modificar.proveedor.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FormModificarProveedor() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [id] = useState<string>(queryParams.get("id") || "");
  const [name, setName] = useState<string>(queryParams.get("name") || "");
  const [rif, setRif] = useState<string>(queryParams.get("rif") || "");
  const [telefono, setTelefono] = useState<string>(
    queryParams.get("telefono") || ""
  );
  const [email, setEmail] = useState<string>(queryParams.get("email") || "");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRifChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRif(event.target.value);
  };

  const handleTelefonoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTelefono(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      id,
      name,
      rif,
      email,
      telefono,
    };
    const response = await updateData(Tables.proveedor, values, values.id);
    if (!response) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error",
      });
      return;
    } else {
      Swal.fire({
        title: "Buen trabajo",
        text: "Modificación exitosa",
        icon: "success",
      });
      navigate("/Proveedores");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="enun">Modificar proveedor</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="gridContainer">
            <div>
              <p className="titulo">Nombre del proveedor</p>
              <input
                className="input"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <p className="titulo">Rif del provedor</p>
              <input
                className="input"
                type="text"
                value={rif}
                onChange={handleRifChange}
              />
            </div>
            <div>
              <p className="titulo">Email</p>
              <input
                className="input"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <p className="titulo">Telefono</p>
              <input
                className="input"
                type="text"
                value={telefono}
                onChange={handleTelefonoChange}
              />
            </div>
          </div>
          <button className="button">Actualizar</button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btnAtras"
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
}

export default FormModificarProveedor;
