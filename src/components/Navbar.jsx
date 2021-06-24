import React from 'react'

const Navbar = () => {

    return(
        <header>
            <div>
                <div className="Navbar-logo">
                    <img src="" alt="Foto de Geraldine Rios" />
                    <span className="Navbar-name"><h1>Geraldine Rios</h1></span>
                </div>
            </div>
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