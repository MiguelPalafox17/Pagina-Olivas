import './Menu.css'
import { Outlet, Link } from "react-router-dom";

export function Menu() {
    return (
        <div>
            <div className="Barra_Opciones">
                <div className='CajaLogo'><Link to="/" className='Home'><img className='Logo' src="https://re-logic.com/HomeVideoLogos/logo_terraria.png" alt="" /></Link></div>
                <div className='Caja4'>   <Link to="/Iniciar_Sesion" className='Iniciar_Sesion'>Inicio de Sesion</Link> </div>
                <div className='Default'>Noticias</div>
                <div className='Default'>Mercancia</div>
                <div className='Caja3'> <Link to="/Galeria" className='Galeria'>Terraria Arte Oficial</Link> </div>
            </div>
            <Outlet/>
        </div>
    )
}