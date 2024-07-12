import { useLocation } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import { updateData } from "../../../../../../services/supabase";
import { Tables } from "../../../../../../types/core";
import "./form.modificar.producto.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function FormModificar() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [id] = useState<string>(queryParams.get("id") || "");
  const [name, setName] = useState<string>(queryParams.get("name") || "");
  const [precio, setprecio] = useState<string>(queryParams.get("precio") || "");
  const [description, setdescription] = useState<string>(
    queryParams.get("descripcion") || ""
  );
  const [stock, setStock] = useState<string>(queryParams.get("stock") || "");
  const [proveedor, setProveedor] = useState<string>(
    queryParams.get("proveedor") || ""
  );
  const [image, setImage] = useState<string>(queryParams.get("image") || "");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleprecioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setprecio(event.target.value);
  };

  const handledescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setdescription(event.target.value);
  };

  const handleStockChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStock(event.target.value);
  };

  const handleProveedorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProveedor(event.target.value);
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
      proveedor,
      image,
    };
    const response = await updateData(Tables.product, values, values.id);
    if (!response) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error",
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
      <div className={"container"}>
        <h1 className={"enun"}>Modificar producto</h1>
        <form action="" className={"form"} onSubmit={handleSubmit}>
          <div className={"gridContainer"}>
            <div>
              <p className={"titulo"}>Nombre del producto</p>
              <input
                className="input"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <p className={"titulo"}>Precio</p>
              <input
                type="number"
                value={precio}
                onChange={handleprecioChange}
                className="input"
              />
            </div>
            <div>
              <p className={"titulo"}>Cantidad de stock</p>
              <input
                type="number"
                value={stock}
                onChange={handleStockChange}
                className="input"
              />
            </div>
            <div>
              <p className={"titulo"}>Proveedor</p>
              <input
                type="text"
                value={proveedor}
                onChange={handleProveedorChange}
                className="input"
              />
            </div>
            <div>
              <p className={"titulo"}>Imagen</p>
              <input
                type="text"
                value={image}
                onChange={handleImageChange}
                className="input"
              />
            </div>
            <div>
              <p className={"titulo"}>Descripción</p>
              <input
                type="text"
                value={description}
                onChange={handledescriptionChange}
                className="input"
              />
            </div>
          </div>
          <button className={"button"}>Actualizar</button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className={"btnAtras"}
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
}

export default FormModificar;
