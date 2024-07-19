import { CiUser, CiLock } from "react-icons/ci";
import React from "react";
import './styles/login.css'
import '../public/1.jpg'
import '../public/2.jpg'
import '../public/3.jpg'
import '../public/4.jpg'
import '../public/5.jpg'
import '../public/6.jpg'
import '../public/7.jpg'
import '../public/logo.png'

function Login() {
    return(
        <body>
        <center><div className='wrapper'>
            <div className="carrusel">
            <div className="slider">
                <li id="slide1" className="imagen-cambiante"><img src="1.jpg" alt="" height= "470" width= "560"/></li>
                <li id="slide2" className="imagen-cambiante"><img src="2.jpg" alt="" height= "470" width= "560"/></li>
                <li id="slide3" className="imagen-cambiante"><img src="3.jpg" alt="" height= "470" width= "560"/></li>
                <li id="slide4" className="imagen-cambiante"><img src="4.jpg" alt="" height= "470" width= "560"/></li>
                <li id="slide5" className="imagen-cambiante"><img src="5.jpg" alt="" height= "470" width= "560"/></li>
                <li id="slide6" className="imagen-cambiante"><img src="6.jpg" alt="" height= "470" width= "560"/></li>
                <li id="slide7" className="imagen-cambiante"><img src="7.jpg" alt="" height= "470" width= "560"/></li>
            </div>
            <div className="main">
                <li>
                    <a href="#slide1">1</a>
                </li>
                <li>
                    <a href="#slide2">2</a>
                </li>
                <li>
                    <a href="#slide3">3</a>
                </li>
                <li>
                    <a href="#slide4">4</a>
                </li>
                <li>
                    <a href="#slide5">5</a>
                </li>
                <li>
                    <a href="#slide6">6</a>
                </li>
                <li>
                    <a href="#slide7">7</a>
                </li>
            </div>
            </div>
            <div className="login">
            <form action ="">
                <img className="logo" src= "logo.png" alt="" height= "50" width= "60"/>
                <h1>TECHNO WAREHOUSE</h1>
                <h2>Login</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Nombre de usuario" required/>
                        <CiUser/>                       
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Contraseña" required/>
                        <CiLock/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Recordarme</label>
                        <a href="#">¿Olvido su contraseña?</a>
                    </div>
                    <button type="submit">Acceder</button>
                    <div className="register-link">
                        <p>¿Aun no tiene cuenta? <a href="#">Registrese</a></p>
                    </div>
            </form>
            </div>       
        </div>
        </center>
        </body>
    );
};

export default Login;