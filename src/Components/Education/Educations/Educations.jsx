import React from 'react'
import { ContainerEducation, ContentEducation } from './EducationsStyles'

const Educations = () => {
  return (
    <ContainerEducation>
      <ContentEducation>
        <h4>Bootcamp Academia Geek</h4>
        <small>Abril 2021 | Agosto 2021</small>
        <p>Bootcamp intensivo de desarrollo de software Front-End con duración de 220 horas
        </p>
        <p>Actividades y grupos: Metodología: Entrenamiento metodología aprender-haciendo, basada en proyectos y en sprints, simulando retos reales del mundo laboral. ​Actividades y grupos: Metodología: Entrenamiento metodología aprender-haciendo, basada en proyectos y en sprints, simulando retos reales del mundo laboral.
          220 horas de formación​: 130 Técnicas, ​20 Desing thinking​, 40 Habilidades del Ser​, 30 empleabilidad.​</p>
      </ContentEducation>
      <ContentEducation>
        <h4>Universidad Iberoamericana</h4>
        <small>Septiembre 2022</small>
        <p>Ingenieria de software</p>
      </ContentEducation>
    </ContainerEducation>
  )
}

export default Educations