import React from 'react'
import About from './About.jsx'
import Navbar from './Navbar.jsx'
import Study from './Study.jsx'
import Portafolio from './Portafolio.jsx'
import Form from './Form.jsx'
import App from '../styles/App.css'

const Main = () => {

    return(
        <div>
            <Navbar/>
            <About/>
            <Study/>
            <Portafolio/>
            <Form/>
        </div>
    )

}

export default Main