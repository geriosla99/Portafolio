import React from 'react'
import App from '../styles/App.css'
import Social from './Social.jsx'

const About = () => {

    return(
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src="../Img/Geral.jpeg" alt="About foto" />
                </figure>
            </div>
            <div className="About-name">
                <h1>Geraldine Rios</h1>
            </div>
            <div  className="About-profession">
                <p>Desarrollo web/Frontend</p>
            </div>
            <div className="About-description">
                <p>Desarrolladora web en proceso</p>
            </div>
            <div className="About-ubication">
                <p>Soacha-Cundinamarca</p>
            </div>
            <div className="About-social">
                <Social/>
            </div>
        </div>
    </div>
    )
}

export default About