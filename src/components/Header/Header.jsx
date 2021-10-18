import React from 'react'
import About from '../About/About'
import Menu from '../Menu/Menu'
import { PhotoBanner } from './HeaderStyled'

const Header = () => {
    return (
        <>
            <PhotoBanner>                
            </PhotoBanner>
            <About/> 
            <Menu/>        
        </>
    )
}

export default Header
