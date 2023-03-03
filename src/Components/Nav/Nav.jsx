import React from 'react'
import './Nav.css'
import { useRef } from "react";
import { Header, Li, Link, Navigator, Ul } from './NavStyled'
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {

  const navRef= useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div>
        <Header>
            <Navigator ref={navRef}>
                <Ul>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Inicio</Link></Li>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Portafolio</Link></Li>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Blog</Link></Li>
                    <Li className='list-nav'><Link  className='link-nav' href="#">Contacto</Link></Li>
                    <button className='nav-btn' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </Ul>
            </Navigator>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaBars/>
            </button>
        </Header>
    </div>
  )
}

export default Nav