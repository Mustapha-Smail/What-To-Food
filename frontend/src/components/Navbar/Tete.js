import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import './navbar.css'

const Tete = () => {

    const navigate = useNavigate()

    const [toggleMenu, setToggleMenu] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        localStorage.getItem('userInfo') && setUserInfo(localStorage.getItem('userInfo'))
    }, [])
    
    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const logoutHandler = () => {
        localStorage.removeItem('userInfo')
        //reload
        navigate(0)
    }

    const accountIcon = (<i className="fas fa-user-circle"></i>)

    return (
        <Navbar expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <img src="/images/logo.svg" alt="logo" className="logo__image" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={handleMenu}
                >
                    {toggleMenu
                        ? (<RiCloseLine color="#FFECDE" size={48}/>)
                        : (<RiMenu3Line color="#FFECDE" size={48}/>)
                    }
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <>
                    <Nav className='m-auto nav__links'>
                        <LinkContainer to='/' className="nav__list-item scale">
                            <Nav.Link className="nav__link">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about' className="nav__list-item scale">
                            <Nav.Link className="nav__link">About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact' className="nav__list-item scale">
                            <Nav.Link className="nav__link">Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {userInfo
                        ?(
                            <NavDropdown 
                                title={accountIcon}
                            >
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        )
                        :(
                            <Nav className='auth-btns'>
                                <LinkContainer to='/login' className="login scale">
                                    <Nav.Link> <i className="fas fa-sign-in" aria-hidden="true"></i> Sign In</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/register' className="register scale">
                                    <Nav.Link> <i className="fas fa-user-plus" aria-hidden="true"></i> Sign Up</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        )
                    }
                </>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Tete;
