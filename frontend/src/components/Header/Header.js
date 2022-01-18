import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './header.css'


const Header = () => {

    const navigate = useNavigate()

    const generateRecipe = async () => {
        try {
            const { data } = await axios.get('/api/recipes/random')
            console.log(data)
            navigate(`/recipe/${data.id}`)
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="header-section section__padding">
            <div className="header-section__content">
                <div className="header-section__content-text">
                    <p>Don’t know</p>
                    <h1 className="header-section__headline">WHAT TO FOOD ?</h1>
                    <p>Get a random recipe and start cooking 😉</p>
                </div>
                <button 
                    className="btn generate-btn scale"
                    onClick={generateRecipe}
                >
                    GENERATE
                </button>
            </div>
        </section>
    )
}

export default Header
