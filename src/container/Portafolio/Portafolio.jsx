import React from 'react'
import Education from '../../components/Education/Education'
import ContactForm from '../../components/ContactForm/ContactForm'
import Header from '../../components/Header/Header'
import MyInfo from '../../components/MyInfo/MyInfo'
import Proyects from '../../components/Proyects/Proyects'
import Footer from '../../components/Footer/Footer'
import { Container } from 'react-bootstrap'

const Portafolio = () => {
    return (
        <>
            <Header/>
            <Container>
                <MyInfo/>
                <Education/>
                <Proyects/>
                <ContactForm/>
            </Container>               
            <Footer/>
        </>
    )
}

export default Portafolio
