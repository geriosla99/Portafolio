import React from 'react'
import { SubMenu } from './EducationStyled'
import '../Menu/Menu.css'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Habilitys from './Hability/Habilitys'

const Education = () => {

    return (
        <>            
            <h3>Mis estudios</h3>
            <SubMenu>
                <BrowserRouter> 
                    <h4><Nav.Link className='text' href="/Habilidades">Habilidades</Nav.Link></h4>
                    <Habilitys/>                    
                    {/* <h4><Nav.Link className='text' to="/Estudios">Estudios</Nav.Link></h4>
                    <h4><Nav.Link className='text' to="/Cursos-hechos">Cursos hechos</Nav.Link></h4> */}
                </BrowserRouter>
            </SubMenu>
        </>
    )
}

export default Education
