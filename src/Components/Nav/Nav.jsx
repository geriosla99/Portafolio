import React from 'react'
import './Nav.css'
import { Header, Li, Link, Navigator, Ul } from './NavStyled'

const Nav = () => {
  return (
    <div>
        <Header>
            <Navigator>
                <Ul>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Inicio</Link></Li>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Portafolio</Link></Li>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Blog</Link></Li>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Contacto</Link></Li>
                </Ul>
            </Navigator>
        </Header>
    </div>
  )
}

export default Nav