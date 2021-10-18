import React from 'react'
import Education from '../../components/Education/Education'
import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header'
import MyInfo from '../../components/MyInfo/MyInfo'
import Proyects from '../../components/Proyects/Proyects'

const Portafolio = () => {
    return (
        <>
            <Header/>   
            <MyInfo/>
            <Education/>
            <Proyects/>
            <Form/>
        </>
    )
}

export default Portafolio
