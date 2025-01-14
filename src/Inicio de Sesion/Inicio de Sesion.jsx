import './Incio de Sesion.css'
import { useState } from 'react'


export function Iniciar_Sesion( {setUser} ) {
    const [User, SetUsuario] = useState("")
    const [Password, setPassword ] = useState ("")
    const [Error, setError] = useState(false)

    const handleSubmit = (Evento => {
        Evento.preventDefault()

        if (User === "" || Password === "") {
            setError(true)
            return
        }
        setError(false)
        setUser([User])
    }
    )
    return (
        <div>
            <section className='Seccion1_Sesion'>
                <div className='Caja2_Sesion'>
                    <div className='Texto1_Sesion'><h1>Formulario de Registro</h1></div>
                    <div className='Caja_Formulario'>
                        <form className='Formulario'  onSubmit={ handleSubmit }>
                            <div className='Texto1_Sesion'><h1>CORREO ELECTRONICO</h1></div>
                            <div><input type="email" value={ User } onChange={ Evento => SetUsuario(Evento.target.value) } /></div>
                            <div className='Texto1_Sesion'><h1>Contraseña</h1></div>
                            <div><input type='password' value={ Password } onChange={ Evento =>  setPassword (Evento.target.value)} /></div>
                            <button className='Registro'>Registarse</button>
                        </form>
                        {Error && <p className='error'>No seas flojo y llena todos tus datos!!!</p>}
                    </div>
                </div>
            </section>
        </div>
    )
}