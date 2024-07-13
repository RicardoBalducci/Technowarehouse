import { useLocation } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import { updateData } from "../../../../../../services/supabase";
import { Tables } from "../../../../../../types/core";
import "./form.modificar.producto.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SelectProveedor from "../../ingresar/components/select.proveedor";

function FormModificar() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [id] = useState<string>(queryParams.get("id") || "");
  const [name, setName] = useState<string>(queryParams.get("name") || "");
  const [precio, setPrecio] = useState<string>(queryParams.get("precio") || "");
  const [description, setDescription] = useState<string>(
    queryParams.get("descripcion") || ""
  );
  const [stock, setStock] = useState<string>(queryParams.get("stock") || "");
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState<string>(
    queryParams.get("proveedor") || ""
  );
  const [image, setImage] = useState<string>(queryParams.get("image") || "");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePrecioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrecio(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleStockChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStock(event.target.value);
  };

  const handleProveedorChange = (selectedProveedorId: string) => {
    setProveedorSeleccionado(selectedProveedorId);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      id,
      name,
      precio,
      description,
      stock,
      proveedor: proveedorSeleccionado, // Cambiado a 'proveedor' en lugar de 'proveedorSeleccionado'
      image,
    };
    const response = await updateData(Tables.product, values, values.id);
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
      navigate("/Products");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="enun">Modificar producto</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="gridContainer">
            <div>
              <p className="titulo">Nombre del producto</p>
              <input
                className="input"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <p className="titulo">Precio</p>
              <input
                type="number"
                value={precio}
                onChange={handlePrecioChange}
                className="input"
              />
            </div>
            <div>
              <p className="titulo">Cantidad de stock</p>
              <input
                type="number"
                value={stock}
                onChange={handleStockChange}
                className="input"
              />
            </div>
            <div>
              <p className="titulo">Proveedor</p>
              <SelectProveedor
                onProveedorChange={handleProveedorChange}
                defaultValue={proveedorSeleccionado}
              />
            </div>
            <div>
              <p className="titulo">Imagen</p>
              <input
                type="text"
                value={image}
                onChange={handleImageChange}
                className="input"
              />
            </div>
            <div>
              <p className="titulo">Descripción</p>
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                className="input"
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

export default FormModificar;
