import React, { useState } from 'react'
import { Container, Content, Description, InfoChange, Name, PhotoGRL, Profesion } from './AboutMe'
import './AboutMe.css'
const AboutMe = () => {

  const [mostrarComponente, setMostrarComponente] = useState(true);
  const handleMouseEnterLeave = () => setMostrarComponente(!mostrarComponente);
  return (
    <div>
      <Container>
        <Content>
        <InfoChange onMouseEnter={handleMouseEnterLeave} onMouseLeave={handleMouseEnterLeave}>
    {mostrarComponente ? (
      <>
        <Name className="show-element">Geraldine Rios</Name>
        <Profesion className="show-element">Desarrolladora Web</Profesion>
      </>
    ) : (
      <Description>Soy la mejor opción porque poseo una amplia experiencia en el diseño y desarrollo de sitios web, además de contar con habilidades en programación y resolución de problemas. Soy apasionada por mi trabajo y estoy comprometida en ofrecer soluciones eficientes y de alta calidad a mis clientes. </Description>
    )}
  </InfoChange>
          <PhotoGRL src="https://i.imgur.com/maRpDEd.jpg" alt="" />
        </Content>
      </Container>
    </div>
  )
}

export default AboutMe