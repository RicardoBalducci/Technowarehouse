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
import ProductosPage from "./module/admin/pages/visual_productos/VisualProductos";
function App() {
  return (
    <Router>
      {/* Definición de las rutas */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Admin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
        <Route path="/visual_productos" element={<ProductosPage />} />
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
