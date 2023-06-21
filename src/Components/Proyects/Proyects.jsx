import React from 'react'
import './Proyects.css'
import { CardProyect, ContainerProyect, ContentProyect, TitleProyect, TitleProyects, ImgProyects, DescriptionProyect } from './ProyectStyles'

const Proyects = () => {
  return (
    <ContainerProyect>
        <TitleProyect>Portafolio</TitleProyect>
        <ContentProyect>
            <CardProyect>
                <TitleProyects>
                    Landing Page
                </TitleProyects>
                    <hr />
                    <DescriptionProyect>
                        Este es un proyecto en el que se crea una landing page de un e-commerce.
                    </DescriptionProyect>
                    <a target="_blank" rel="noreferrer" href="https://landingpageexcel.netlify.app/">
                        <ImgProyects src="https://i.imgur.com/kPvSRPb.png" alt="" />
                    </a>
                    {/* agregar link al proyecto */}
            </CardProyect>
            <CardProyect>
                <TitleProyects>
                    Dinamik Park
                </TitleProyects>
                    <hr />
                    <DescriptionProyect>
                        En este proyecto en el que se una página web para un parque de trampolines hecho en wordpress.
                    </DescriptionProyect>
                    <a target="_blank" rel="noreferrer" href="https://dinamiktrampolinepark.com/">
                        <ImgProyects src="https://i.imgur.com/6WHl0vu.png" alt="" />
                    </a>
                    {/* agregar link al proyecto */}
            </CardProyect>
        </ContentProyect>
    </ContainerProyect>
  )
}

export default Proyects