import React from 'react'
import App from '../styles/App.css'

const Navbar = () => {

    return(
        <header className="header">
            <nav className="Navbar-menu">
                <ul className="Navbar-links">
                    <li><a href="./">Inicio</a></li>
                    <li><a href="./About.jsx">Sobre mí</a></li>
                    <li><a href="./Study.jsx">Estudios</a></li>
                    <li><a href="./Portafolio.jsx">Portafolio</a></li>
                    <li><a href="./Form.jsx">Formulario</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Navbar