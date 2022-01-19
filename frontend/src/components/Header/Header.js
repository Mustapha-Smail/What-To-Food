import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './header.css'
import { Footer, Message } from '..'


const Header = () => {

    const navigate = useNavigate()

    const [error, setError] = useState(null)

    const generateRecipe = async () => {
        try {
            const { data } = await axios.get('/api/recipes/random')
            navigate(`/recipe/${data.id}`)
            
        } catch (err) {
            console.error(err)
            setError(
                err.response && err.response.data.message 
                ? err.response.data.message 
                : err.message
            )
        }
    }

    return (
        <>
            <section className="header-section section__padding">
                <div className="header-section__content">
                    <div className="header-section__content-text">
                        <p>Don’t know</p>
                        <h1 className="header-section__headline">WHAT TO FOOD ?</h1>
                        <p>Get a random recipe and start cooking 😉</p>
                    </div>
                    
                    {error && (
                        <Message variant='danger' >
                            {error}
                        </Message>
                    )}

                    <button 
                        className="btn generate-btn scale"
                        onClick={generateRecipe}
                    >
                        GENERATE
                    </button>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Header
