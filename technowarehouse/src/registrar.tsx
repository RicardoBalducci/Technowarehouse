import './styles/registrar.css'
import '../public/icono1.png'
import '../public/icono2.png'
import '../public/icono3.png'

function Registrar (){
    return(
        <body>
            <div className="container-r">
            <center><div className='wrapper-r'>
            <div className="lado-logo-r">
            <img className="logo-r" src= "logo.png" alt="Logo"/>
            <h1 className='titulo-r'>TECHNO WAREHOUSE</h1>
            <p className="etiqueta-r">© 2024 Techno Warehouse. Todos los derechos reservados.</p>
            </div>
            <div className="login-r">
            <form action ="">
                <h2 className='titulo2-r'>Registrar</h2>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="text" placeholder="Correo electrónico" required/>
                        <img className="icono-r" src="icono1.png" alt="icono email" />                       
                    </div>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="text" placeholder="Cédula" required/>
                        <img className="icono-r" src="icono4.png" alt="icono cédula" />                       
                    </div>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="text" placeholder="Nombre" required/>
                        <img className="icono-r" src="icono5.png" alt="icono nombre" />                       
                    </div>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="text" placeholder="Apellido" required/>
                        <img className="icono-r" src="icono5.png" alt="icono apellido" />                       
                    </div>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="text" placeholder="Teléfono" required/>
                        <img className="icono-r" src="icono6.png" alt="icono teléfono" />                       
                    </div>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="text" placeholder="Dirección" required/>
                        <img className="icono-r" src="icono7.png" alt="icono dirección" />                       
                    </div>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="password" placeholder="Contraseña" required/>
                        <img className="icono-r" src="icono2.png" alt="icono password" />
                    </div>
                    <div className="input-box-r">
                        <input className="ingresar-r" id="value" type="password" placeholder="Repetir contraseña" required/>
                        <img className="icono-r" src="icono2.png" alt="icono password" />
                    </div>
                    <button className="sbmt-r" type="submit">Registrar</button>
                    <div className="login-link">
                        <p>¿Ya tiene una cuenta? <a href="#">Acceder</a></p>
                    </div>
            </form>
            </div>       
        </div>
        </center>
            </div>
        </body>
    )
}
export default Registrar;