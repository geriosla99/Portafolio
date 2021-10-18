import React from 'react'
import { BoxHability, SkillsBoxes } from '../EducationStyled'
import { ProgressBar } from 'react-bootstrap'

const Habilitys = () => {
    return (
        <>
            <BoxHability>
                    <SkillsBoxes>
                        <h5>HTML</h5>
                        <ProgressBar animated now={70} />
                    </SkillsBoxes>
                    <SkillsBoxes>
                        <h5>CSS</h5>
                        <ProgressBar animated now={70} />
                    </SkillsBoxes>
                    <SkillsBoxes>
                        <h5>Javascript</h5>
                        <ProgressBar animated now={50} />
                    </SkillsBoxes>
                    <SkillsBoxes>
                        <h5>jQuery</h5>
                        <ProgressBar animated now={30} />
                    </SkillsBoxes>
                    <SkillsBoxes>
                        <h5>React</h5>
                        <ProgressBar animated now={60} />
                    </SkillsBoxes>
                    <SkillsBoxes>
                        <h5>Angular</h5>
                        <ProgressBar animated now={20} />
                    </SkillsBoxes>
                </BoxHability>
        </>
    )
}

export default Habilitys
