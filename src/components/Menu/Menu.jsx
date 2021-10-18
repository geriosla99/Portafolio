import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { MenuPortafolio, StyledNav, MenuContainer } from './MenuStyled'
import './Menu.css'


const Menu = () => {
    return (
        <>
            <MenuContainer>
                <StyledNav>                
                    <MenuPortafolio>
                        <BrowserRouter>
                            <h5><Link className='text' to="/Sobre-mi">Sobre mí</Link></h5>
                        </BrowserRouter>
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <BrowserRouter>
                        <h5><Link className='text' to="/Estudios">Mis estudios</Link></h5>
                        </BrowserRouter>                        
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <BrowserRouter>
                        <h5><Link className='text' to="/Mis-proyectos">Mis proyectos</Link></h5>
                        </BrowserRouter>                        
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <BrowserRouter>
                            <h5><Link className='text' to="/Contactame">Contáctame</Link></h5>
                        </BrowserRouter>                        
                    </MenuPortafolio>            
                </StyledNav>
            </MenuContainer>           
        </>
    )
}

export default Menu
