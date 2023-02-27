import React, { useState } from 'react'
import { Container, Content, Description, InfoChange, Name, PhotoGRL, Profesion } from './AboutMe'
import './AboutMe.css'
const AboutMe = () => {

  const [mostrarComponente, setMostrarComponente] = useState(true);

  return (
    <div>
      <Container>
        <Content>
          <InfoChange onMouseEnter={() => setMostrarComponente(!mostrarComponente)} onMouseLeave={() => setMostrarComponente(!mostrarComponente)}>
            {mostrarComponente && <Name className={mostrarComponente ? "show-element" : null}>Geraldine Rios</Name>}
            {!mostrarComponente && <Description>Soy la mejor opción porque poseo una amplia experiencia en el diseño y desarrollo de sitios web, además de contar con habilidades en programación y resolución de problemas. Soy apasionada por mi trabajo y estoy comprometida en ofrecer soluciones eficientes y de alta calidad a mis clientes. </Description>}
            {mostrarComponente && <Profesion className={mostrarComponente ? "show-element" : null}>Desarrolladora Web</Profesion>}
          </InfoChange>
          <PhotoGRL src="https://i.imgur.com/maRpDEd.jpg" alt="" />
        </Content>
      </Container>
    </div>
  )
}

export default AboutMe