import React from 'react'
import { ContainerPhoto, ProfilePhoto, ContentFirstInfo, PersonalInfo } from './AboutStyled'

const About = () => {

    return (
        <>
            <ContentFirstInfo>
                <ContainerPhoto>
                    <ProfilePhoto src='https://i.imgur.com/91kcK94.png' alt='Foto de Geraldine Rios' />
                </ContainerPhoto>
                <PersonalInfo>
                    <h1>Geraldine Rios</h1>
                    <h3>Desarrolladora web Frontend</h3>
                    {/* <p>Desarrollador web Front-End con énfasis en ReactJs | HTML5 | CSS3 | JavaScript | Bootstrap | Figma | Marvelapp | Redux | Firebase | Responsive Design | Git y GitHub | Design Thinking | Metodologías Agiles</p> */}
                </PersonalInfo>
            </ContentFirstInfo>
        </>
    )
}

export default About
