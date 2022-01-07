import React from 'react'

const Menu = () => {
    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list-item scale"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__list-item scale"><a href="#about" className="nav__link">About us</a></li>
                    <li className="nav__list-item scale"><a href="#contact" className="nav__link">Contact us</a></li>
                </ul>
            </nav>

            <div className="auth">
                <a href="/login" className="login scale"> 
                    <i className="fa fa-sign-in" aria-hidden="true"></i> Sign in 
                </a>
                <a href="/register" className="register scale"> 
                    <i className="fa fa-user-plus" aria-hidden="true"></i> Sign up
                </a>
            </div>
        </>
    )
}

export default Menu
