import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const navigate = useNavigate()

    const [toggleMenu, setToggleMenu] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        localStorage.getItem('userInfo') && setUserInfo(localStorage.getItem('userInfo'))
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('userInfo')
        //reload
        navigate(0)
    }

    return (
        <nav className="navigation section__padding">
            <div className="logo">
                <a href="/" className="logo__link">
                    <img src="/images/logo.svg" alt="logo" className="logo__image" />
                </a>
            </div>

            <ul className="nav__list">
                <li className="nav__list-item scale"><a href="/" className="nav__link">Home</a></li>
                <li className="nav__list-item scale"><a href="/about" className="nav__link">About us</a></li>
                <li className="nav__list-item scale"><a href="/contact" className="nav__link">Contact us</a></li>
            </ul>
            
            {userInfo
                ?<ul 
                    title={userInfo.name}
                    id='username'
                >
                    <li className="nav__list-item scale"><span onClick={logoutHandler} className="nav__link">Logout</span></li>
                </ul>
                :<div className="auth">
                    <a href="/login" className="login scale">
                        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign in
                    </a>
                    <a href="/register" className="register scale">
                        <i className="fa fa-user-plus" aria-hidden="true"></i> Sign up
                    </a>
                </div>
            }

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
