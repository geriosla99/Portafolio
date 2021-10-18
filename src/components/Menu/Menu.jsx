import React from 'react'
import { MenuPortafolio, StyledNav, MenuContainer } from './MenuStyled'


const Menu = () => {
    return (
        <>
            <MenuContainer>
                <StyledNav>                
                    <MenuPortafolio>
                        <h5>Sobre mí</h5>
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <h5>Mis estudios</h5>
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <h5>Mis proyectos</h5>
                    </MenuPortafolio>
                    <MenuPortafolio>
                        <h5>Contáctame</h5>
                    </MenuPortafolio>            
                </StyledNav>
            </MenuContainer>           
        </>
    )
}

export default Menu
