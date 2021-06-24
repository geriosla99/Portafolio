import React from 'react'
import App from '../styles/App.css'

const Form = () => {
     
    return(
        <div className="About">
            <h2>Formulario</h2>
            <form action="">
                <input type="text" placeholder="Tu nombre" />
                <input type="text" placeholder="Tu correo" />
                <input type="text" placeholder="Asunto" />
                <input type="text" placeholder="En que puedo ayudarte?"/>
                <input type="submit" placeholder="Enviar"/>
            </form>
        </div>
    )

}

export default Form