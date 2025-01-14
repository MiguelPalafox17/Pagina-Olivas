import { Home } from '../Pagina principal/Home';
import { useState } from 'react';
import { Iniciar_Sesion } from './Inicio de Sesion'
export function Validar_Sesion() {
    const [User, setUser] = useState([])
    return (
        <div className="conteiner">
            {
                !User.length > 0
                ? <Iniciar_Sesion setUser={ setUser }/>
                : <Home />
            }
        </div>        
    )
}