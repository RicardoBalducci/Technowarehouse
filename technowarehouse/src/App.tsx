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
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
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
        </Routes>
      </Router>
    </ContadorProvider>
  );
}

export default App;
