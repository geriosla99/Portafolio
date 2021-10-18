import React from 'react'
import { ContentResume, ContextResume, ImageAboutMe, ImageAboutMeContent, Resumen, ResumenText } from './MyInfoStyled'

const MyInfo = () => {
    return (
        <>
            <ContentResume>
                <Resumen>
                    <ContextResume>
                        <h3>Sobre mí</h3>
                        <ResumenText>
                            Soy una persona proactiva con motivación al logro, alta empatía y disposición a trabajar en equipos de alto desempeño, preparada para trabajar bajo presión, manejo de ReactJS, dominio intermedio de JavaScript, dominio de HTML y CSS, dominio de librerías de estilo como Bootstrap y conocimientos de la librería Chakra, conocimientos en Figma, Marvel app, Balsamiq y uso intermedio de Canva, conocimientos básicos de hardware, manejo de sistema operativo Windows y suite de ofimática office. Mis pasatiempos favoritos dibujar, diseñar, me apasiona aprender cosas nuevas y las nuevas vivencias.
                        </ResumenText>
                    </ContextResume>
                    <ImageAboutMeContent>
                        <ImageAboutMe src='https://i.imgur.com/4O2i8Xk.png' alt='imagen de persona estudiando'/>
                    </ImageAboutMeContent>
                </Resumen>
            </ContentResume>                        
        </>
    )
}

export default MyInfo
