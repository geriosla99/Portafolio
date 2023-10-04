import React, { useState } from 'react'
import { Container, Content, Description, DescriptionText, DescriptionTitle, InfoChange, Name, PhotoGRL, Profesion } from './AboutMe'
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
              <Description>Experta en diseño y desarrollo de sitios web con una sólida experiencia en programación y resolución de problemas. Comprometida con ofrecer soluciones eficientes y de alta calidad. ¡Contáctame para llevar tu presencia en línea al siguiente nivel!</Description>
            )}
          </InfoChange>
          <PhotoGRL src="https://i.imgur.com/maRpDEd.jpg" alt="" />
        </Content>
      </Container>
      <DescriptionTitle>
        Experta en Diseño y Desarrollo de Sitios Web: Soluciones de Calidad y Eficiencia
      </DescriptionTitle>
      <DescriptionText>
        Si estás buscando servicios de diseño y desarrollo de sitios web, has llegado al lugar adecuado. En mi extensa trayectoria, he acumulado una sólida experiencia en la creación de sitios web que no solo son visualmente atractivos, sino que también funcionan de manera eficiente.
        <br /><br />Como experta en programación y solución de problemas, estoy comprometida en ofrecer soluciones de alta calidad que se adapten a tus necesidades específicas. Mi pasión por este trabajo se refleja en cada proyecto que emprendo.
        <br /><br />Mis servicios abarcan desde la conceptualización y diseño inicial hasta la implementación y el mantenimiento continuo. Estoy aquí para ayudarte a alcanzar tus objetivos en línea, ya sea que necesites un sitio web personal, una tienda en línea o una plataforma empresarial compleja.
        <br /><br />En cada etapa del proceso, me esfuerzo por superar las expectativas de mis clientes, proporcionando resultados que no solo impresionan, sino que también impulsan el éxito en línea.
        <br /><br />Si valoras la experiencia, la calidad y el compromiso, no dudes en ponerte en contacto conmigo. Juntos, podemos llevar tu presencia en línea al siguiente nivel.
      </DescriptionText>
    </div>
  )
}

export default AboutMe