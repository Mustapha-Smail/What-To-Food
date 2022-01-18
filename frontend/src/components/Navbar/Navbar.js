import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navigation section__padding">
            <div className="logo">
                <a href="#home" className="logo__link">
                    <img src="/images/logo.svg" alt="logo" className="logo__image" />
                </a>
            </div>

            <ul className="nav__list">
                <li className="nav__list-item scale"><a href="/" className="nav__link">Home</a></li>
                <li className="nav__list-item scale"><a href="#about" className="nav__link">About us</a></li>
                <li className="nav__list-item scale"><a href="#contact" className="nav__link">Contact us</a></li>
            </ul>

            <div className="auth">
                <a href="/login" className="login scale">
                    <i className="fa fa-sign-in" aria-hidden="true"></i> Sign in
                </a>
                <a href="/register" className="register scale">
                    <i className="fa fa-user-plus" aria-hidden="true"></i> Sign up
                </a>
            </div>

            <div className="nav-mobile">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={36} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={36} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="nav-mobile__content slide-bottom" id="mobile-content">
                        <ul className="nav-mobile__list">
                            <li className="nav__list-item scale"><a href="/" className="nav__link">Home</a></li>
                            <li className="nav__list-item scale"><a href="#about" className="nav__link">About us</a></li>
                            <li className="nav__list-item scale"><a href="#contact" className="nav__link">Contact us</a></li>
                        </ul>

                        <div className="auth-mobile">
                            <a href="/login" className="login scale">
                                <i className="fa fa-sign-in" aria-hidden="true"></i> Sign in
                            </a>
                            <a href="/register" className="register scale">
                                <i className="fa fa-user-plus" aria-hidden="true"></i> Sign up
                            </a>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar
