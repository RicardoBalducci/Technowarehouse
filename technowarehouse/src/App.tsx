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
import PanelProveedores from "./module/admin/pages/proveedores/proveedores.admin";
import IngresarProveedor from "./module/admin/pages/proveedores/ingresarProveedor/proveedor.ingresar";
import ModificarProveedor from "./module/admin/pages/proveedores/modificarProveedor/proveedor.modificar";
import Portada from "./module/portada/Portada";
import Login from "./module/login/login/login2";
import SignIn from "./module/login/registrar/signup";
import UserPrincipal from "./module/user/user";
import ModificarUsuario from "./module/user/pages/modificarUsuario/modificar";
import Informacion from "./module/user/pages/informacion/informacion";
import ProductosPage from "./module/user/pages/visual_productos/VisualProductos";
import Carrito from "./module/user/pages/carrito/carritoCompra";
import Pedido from "./module/admin/pages/pedidos/pedido";
import { ContadorProvider } from "./module/user/ts/contador";
import UsuarioAdministrador from "./module/admin/pages/usuarios/usuarios";
import Historial from "./module/admin/pages/historial/historial";

function App() {
  return (
    <ContadorProvider>
      <Router>
        {/* Definición de las rutas */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Portada />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          {/* UsuarioAdministrador  Historial*/}
          <Route path="/UsuariosAdmin" element={<UsuarioAdministrador />} />
          <Route path="/Historial" element={<Historial />} />
          <Route path="/User" element={<UserPrincipal />} />
          <Route path="/Informacion" element={<Informacion />} />
          <Route path="/PageProducts" element={<ProductosPage />} />
          <Route path="/HomePageUser" element={<ProductosPage />} />
          <Route path="/ModificarUser" element={<ModificarUsuario />} />
          <Route path="/Pedido" element={<Pedido />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Products" element={<PanelProductos />} />
          <Route path="/ProductsIngresar" element={<IngresarProductos />} />
          <Route path="/ProductsModificar" element={<ModificarProducto />} />
          <Route path="/Proveedores" element={<PanelProveedores />} />
          <Route path="/ProveedoresIngresar" element={<IngresarProveedor />} />
          <Route
            path="/ProveedoresModificar"
            element={<ModificarProveedor />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          {/* Agrega otras rutas aquí según sea necesario UsuarioRegistro*/}
        </Routes>
      </Router>{" "}
    </ContadorProvider>
  );
}

export default App;
/*
HomePageUser
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Admin from "./module/admin";
import PrincipalAdmin from "./module/admin/pages/principal/principal.admin";
import PanelProductos from "./module/admin/pages/productos/productos.admin";
import IngresarProductos from "./module/admin/pages/productos/ingresar/productos.ingresar";
import ModificarProducto from "./module/admin/pages/productos/modificar/productos.modificar";
import PanelProveedores from "./module/admin/pages/proveedores/proveedores.admin";
import IngresarProveedor from "./module/admin/pages/proveedores/ingresarProveedor/proveedor.ingresar";
import ModificarProveedor from "./module/admin/pages/proveedores/modificarProveedor/proveedor.modificar";
import Portada from "./module/portada/Portada";

function AdminRoutes() {
  return (
    <>
      <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
      <Route path="/Products" element={<PanelProductos />} />
      <Route path="/ProductsIngresar" element={<IngresarProductos />} />
      <Route path="/ProductsModificar" element={<ModificarProducto />} />
      <Route path="/Proveedores" element={<PanelProveedores />} />
      <Route path="/ProveedoresIngresar" element={<IngresarProveedor />} />
      <Route path="/ProveedoresModificar" element={<ModificarProveedor />} />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/admin" element={<Admin />}>
          <Route element={<AdminRoutes />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

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
