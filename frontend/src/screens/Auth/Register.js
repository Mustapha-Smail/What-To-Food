import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'

import { Message, Loader, Navbar, Footer } from '../../components'

import './auth.css'

const Register = () => {
    const [lastName, setLastName] = useState('')   
    const [firstName, setFirstName] = useState('')   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const location = useLocation()
    const navigate = useNavigate()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo')
        if(userInfo) {
            navigate(redirect)
        }
    }, [navigate, redirect])
    
    const submitHandler = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Passwords do not match') 
        }else {
            setLoading(true)
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json' 
                    }
                }
        
                const { data } = await axios.post(
                    '/api/users/',
                    { lastName, firstName, email, password }, 
                    config
                )
    
                setLoading(false)
                setError(null)
                localStorage.setItem('userInfo', JSON.stringify(data))
                navigate(redirect)
            } catch (err) {
                console.error(err)
                setLoading(false)
                setError(
                    err.response && err.response.data.message 
                    ? err.response.data.message 
                    : err.message
                )
            }
        }

    }

    return (
        <>
            <Navbar/>
            <Container className="py-5">
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                        <h1 className="my-3">Sign Up</h1>
                        {error && <Message variant='danger'>{error}</Message>}
                        {message && <Message variant='danger'>{message}</Message>}
                        {loading 
                            ? <Loader /> 
                            :<Form onSubmit={submitHandler}>
                                <Form.Group controlId='lastname'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        type='name'
                                        placeholder='Enter last name' 
                                        value={lastName}
                                        required={true}
                                        onChange={(e)=>setLastName(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='firstname'>
                                    <Form.Label>first Name</Form.Label>
                                    <Form.Control 
                                        type='name'
                                        placeholder='Enter first name' 
                                        value={firstName}
                                        required={true}
                                        onChange={(e)=>setFirstName(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='email'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                        type='email'
                                        placeholder='Enter email' 
                                        value={email}
                                        required={true}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type='password'
                                        placeholder='Enter password' 
                                        value={password}
                                        required={true}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='confirmPassword'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        type='password'
                                        placeholder='Confirm password' 
                                        value={confirmPassword}
                                        required={true}
                                        onChange={(e)=>setConfirmPassword(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Button
                                    type='submit'
                                    className='mt-3 btn-more'
                                >
                                    Sign Up
                                </Button>
                            </Form>
                        }
                        <Row className='py-3'>
                        <Col>
                            Have an Account ? 
                            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} >
                                Login
                            </Link>
                        </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <Footer/>
        </>
    )
}

export default Register
