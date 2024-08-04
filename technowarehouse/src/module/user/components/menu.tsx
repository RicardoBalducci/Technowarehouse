import "../../portada/components/Cabecera.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContador } from "../ts/contador";

// Define the User interface
interface User {
  name: string;
  email: string;
  // Add other properties as needed
}

const Cabecera = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User | null>(null); // Use User type
  const [menu, setMenu] = useState(false);
  const { contador } = useContador(); // Usar el contexto
  const [cantidadProductos, setCantidadProductos] = useState(0); // Estado para la cantidad de productos únicos

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleUserNavigation = () => {
    if (userData) {
      navigate("/User", { replace: true, state: { user: userData } });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData"); // Clear user data from local storage
    navigate("/"); // Navigate to the home page
  };

  useEffect(() => {
    // Leer el carrito del localStorage y contar los productos únicos
    const storedCarrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const totalProductos = storedCarrito.length; // Contar la cantidad de productos únicos
    setCantidadProductos(totalProductos);
  }, [contador]); // Actualizar cuando el contador cambie

  return (
    <header className="Cabecera">
      <h1 className="Cabecera-h1">
        <a href="/PageProducts" className="Cabecera-a">
          Technowarehouse
        </a>
      </h1>

      <button onClick={toggleMenu} className="Cabecera-button">
        <svg
          className="Cabecera-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <a href="/PageProducts" className="Cabecera-a">
              Products
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="/Carrito" className="Cabecera-a">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <p className="Cabecera-p">{cantidadProductos}</p>
          </li>
          <li className="Cabecera-li">
            <a
              href="/User"
              onClick={handleUserNavigation}
              className="Cabecera-a"
            >
              user
            </a>
          </li>
          <li className="Cabecera-li">
            <a href="/" onClick={handleLogout} className="Cabecera-a">
              Cerrar Sesion
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecera;