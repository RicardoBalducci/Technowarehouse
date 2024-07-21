import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Admin from "./module/admin";
import PrincipalAdmin from "./module/admin/pages/principal/principal.admin";
import "./App.css";
import PanelProductos from "./module/admin/pages/productos/productos.admin";
import IngresarProductos from "./module/admin/pages/productos/ingresar/productos.ingresar";
import ModificarProducto from "./module/admin/pages/productos/modificar/productos.modificar";
import ProductosPage from "./module/admin/pages/visual_productos/ProductosPage";
import PanelProveedores from "./module/admin/pages/proveedores/proveedores.admin";

function App() {
  return (
    <Router>
      {/* Definición de las rutas */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<ProductosPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
        <Route path="/Products" element={<PanelProductos />} />
        <Route path="/ProductsIngresar" element={<IngresarProductos />} />
        <Route path="/ProductsModificar" element={<ModificarProducto />} />
        <Route path="/Proveedores" element={<PanelProveedores />} />
        <Route path="/ProveedoresIngresar" element={<PanelProveedores />} />
        <Route path="/ProveedoresModificar" element={<PanelProveedores />} />

        <Route path="*" element={<Navigate to="/" />} />
        {/* Agrega otras rutas aquí según sea necesario UsuarioRegistro*/}
      </Routes>
    </Router> //PanelProveedores
  );
}

export default App;
/*
import { Tables } from "./types/core";
import { useState } from "react";
import { insertData } from "./services/supabase";
function App() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    image: "",
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await insertData(Tables.product, values);

    if (!response) {
      alert("Error al guardar");
      return;
    }

    alert("Todo Ok");
  };
  return (
    <>
      <h1>Vite + React</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          type="text"
          placeholder="name"
          required
        />
        <input
          name="description"
          value={values.description}
          onChange={handleChange}
          type="text"
          placeholder="description"
          required
        />
        <input
          name="image"
          value={values.image}
          onChange={handleChange}
          type="text"
          required
          placeholder="image"
        />
        <input
          name="stock"
          value={values.stock}
          onChange={handleChange}
          type="number"
          required
          placeholder="stock"
        />
        <button>Guardar</button>
      </form>
    </>
  );
}

export default App;
s
*/
