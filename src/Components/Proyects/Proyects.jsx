import React from 'react'
import './Proyects.css'
import { CardProyect, ContainerProyect, ContentProyect, TitleProyect, TitleProyects, ImgProyects } from './ProyectStyles'

const Proyects = () => {
  return (
    <ContainerProyect>
        <TitleProyect>Proyectos</TitleProyect>
        <ContentProyect>
            <CardProyect>
                <TitleProyects>
                    Landing Page
                </TitleProyects>
                    <hr />
                    <p>
                        Este es un proyecto en el que se crea una landing page de un e-commerce.
                    </p>
                    <a href="https://landingpageexcel.netlify.app/">
                        <ImgProyects src="https://i.imgur.com/kPvSRPb.png" alt="" />
                    </a>
                    {/* agregar link al proyecto */}
            </CardProyect>
        </ContentProyect>
    </ContainerProyect>
  )
}

export default Proyects