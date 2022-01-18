import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import { Ingredients, Navbar, Instructions, CookingTime } from '../../components'
import './recipe.css'


const Recipe = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`/api/recipes/${params.id}`)
                console.log(data)
                setRecipe(data)
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [params.id])

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

        <>
            <Navbar />
            {recipe && (
                <main className="section__padding py-3">
                    {/* Title */}
                    <Row className="my-2">
                        <Col sm={12} md={8} className="text-left">
                            <h1 className="recipe__title">{recipe.title}</h1>
                        </Col>
                        {/* Rating here */}
                        <Col sm={12} md={4} className="d-flex justify-content-end align-items-end rating">
                            <a href="#reviews">(8 reviews)</a>
                            <i className="fas fa-star" aria-hidden="true"></i>
                            <i className="fas fa-star" aria-hidden="true"></i>
                            <i className="fas fa-star" aria-hidden="true"></i>
                            <i className="fas fa-star-half-alt    "></i>
                            <i className="far fa-star" aria-hidden="true"></i>
                        </Col>
                    </Row>
                    {/* Images & Buttons & Cooking Time */}
                    <Row className="py-3">
                        <Col md={8}>
                            <Row className="mb-3">
                                <Col>
                                    <img 
                                        src={recipe.image} 
                                        alt="recipe" 
                                        className="recipe__image"
                                    /> 
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="my-2 d-flex justify-content-md-start justify-content-center">
                                    <button 
                                        className="recipe__btn generate-btn"
                                        onClick={generateRecipe}
                                    >
                                        GENERATE
                                    </button>
                                </Col>
                                <Col md={6} className="my-2 d-flex justify-content-md-end justify-content-center">
                                    <button className="recipe__btn save-btn">
                                        SAVE
                                    </button>
                                </Col>
                            </Row>
                        </Col>

                        {/* Ingredients & Cooking Time*/}
                        
                        <Col md={4}>
                            <Row>
                                <Col sm={12}>
                                    <Row className="my-4">
                                        <CookingTime time={recipe.time}/>
                                    </Row>
                                </Col>
                                <Col 
                                    sm={12} 
                                    className="order-md-first"
                                    style={{
                                        minHeight:'55vh', 
                                    }}
                                >
                                    {recipe.ingredients && (
                                        <Ingredients 
                                            ingredientsList={recipe.ingredients}
                                        />
                                    )}
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                    <Row className="my-5">
                        <Instructions
                            instructionsList={recipe.instructions}
                        />
                    </Row>

                </main>
            )}
        </>
    )
}

export default Recipe