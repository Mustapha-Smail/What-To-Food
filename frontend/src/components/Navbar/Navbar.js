import React from 'react'
import './navbar.css'
import logo from '../../images/logo.png'

import { Menu } from '../../components'

const Navbar = () => {
    return (
        <header className="navbar section__padding">
            <div className="logo">
                <a href="#home" className="logo__link">
                    <img src={logo} alt="logo" className="logo__image" />
                </a>
            </div>
            
            <Menu />

        </header>
    )
}

export default Navbar
