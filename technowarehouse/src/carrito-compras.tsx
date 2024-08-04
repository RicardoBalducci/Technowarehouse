import "../public/logo.png"
import "./styles/carrito.css"
import "../public/ico7.png"
import "../public/ico1.png"
import "../public/ico2.png"
import "../public/ico3.png"
import "../public/ico4.png"
import "../public/ico5.png"
import "../public/ico6.png"
import "../public/icono.png"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ShoppingCart from './car';

function Carrito(){
    return(
        <><><nav>
            <img className="logo-carrito" src="logo.png" alt="logo"></img>
            <h1 className="titulo-pag">TECHNO WAREHOUSE</h1>
            <div className="buscador">
                <div className="borde">
                    <input className="buscar" id="buscar-producto" type="text" placeholder="Busca aquí tu producto" />
                </div>
                <button className="boton-busqueda" type="submit">
                    <img className="lupa" src="icono.png" alt="icono busqueda"></img>
                </button>
            </div>
            <ul className="menu-horizontal">
                <li>
                    <a className="menu" href="#">Hola, nomb-usuario</a></li>
                <ul className="menu-vertical">
                    <li> <a className="opciones" href="#">Inicio</a></li>
                    <li> <a className="opciones" href="#">Carrito de compra</a></li>
                    <li> <a className="opciones" href="#">Cerrar sesión</a></li>
                </ul>
            </ul>



        </nav>
        <div className="barra">
                <img className="dispositivo" src="ico1.png" height="50" width="130" alt="icono"></img>
                <img className="dispositivo" src="ico2.png" height="50" width="75" alt="icono"></img>
                <img className="dispositivo" src="ico3.png" height="55" width="90" alt="icono"></img>
                <img className="dispositivo" src="ico4.png" height="45" width="80" alt="icono"></img>
                <img className="dispositivo" src="ico5.png" height="55" width="100" alt="icono"></img>
                <img className="dispositivo" src="ico6.png" height="55" width="110" alt="icono"></img>
                <img className="dispositivo" src="ico7.png" height="65" width="120" alt="icono"></img>
            </div>
            <body className="carrito">
            <ShoppingCart />

            </body>
            <footer>
                <div className="pie">

                    <p className="etiqueta-carrito text-light ">© 2024 Techno Warehouse. Todos los derechos reservados.</p>

                </div>
            </footer>

        </></>
    )
}

export default Carrito;