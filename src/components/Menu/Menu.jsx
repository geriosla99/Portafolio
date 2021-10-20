import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MenuPortafolio, StyledNav, MenuContainer } from './MenuStyled'
import './Menu.css'
import { Nav } from 'react-bootstrap'


const Menu = () => {
    return (
        <>
            <MenuContainer>
                <StyledNav>                
                    <MenuPortafolio>
                        <BrowserRouter>
                            <h5><Nav.Link  className='text' href="/Sobre-mi">Sobre mí</Nav.Link></h5>
                        </BrowserRouter>
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <BrowserRouter>
                        <h5><Nav.Link  className='text' href="/Estudios">Mis estudios</Nav.Link></h5>
                        </BrowserRouter>                        
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <BrowserRouter>
                        <h5><Nav.Link className='text' href="/Mis-proyectos">Mis proyectos</Nav.Link></h5>
                        </BrowserRouter>                        
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <BrowserRouter>
                            <h5><Nav.Link  className='text' href="/Contactame">Contáctame</Nav.Link></h5>
                        </BrowserRouter>                        
                    </MenuPortafolio>            
                </StyledNav>
            </MenuContainer>           
        </>
    )
}

export default Menu
