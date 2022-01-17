import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import axios from 'axios'

import { Ingredients, Navbar } from '../../components'
import './recipe.css'


const Recipe = () => {

    const ingredients = [
        "Kosher salt",
        "12 oz. lasagna noodles (not no-boil)",
        "8 oz. snow peas, trimmed (about 3 cups)",
        "1 cup shelled fresh peas (from about 1 lb. pods)or frozen peas, thawed",
        "Zest and juice of 1 lemon",
        "Kosher salt",
        "12 oz. lasagna noodles (not no-boil)",
        "8 oz. snow peas, trimmed (about 3 cups)",
        "1 cup shelled fresh peas (from about 1 lb. pods)or frozen peas, thawed",
        "Zest and juice of 1 lemon",
        "Kosher salt",
        "12 oz. lasagna noodles (not no-boil)",
        "8 oz. snow peas, trimmed (about 3 cups)",
        "1 cup shelled fresh peas (from about 1 lb. pods)or frozen peas, thawed",
        "Zest and juice of 1 lemon",
    ]

    return (

        <>
            <Navbar />
            <main className="section__padding py-3">
                <Row className="my-2">
                    <Col sm={12} md={8} className="text-left">
                        <h1 className="recipe__title">Broken Lasagna With Parmesan and All the Peas</h1>
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

                <Row className="py-3">
                    <Col md={8}>
                        <Row className="mb-3">
                            <Col>
                                <img 
                                    src={process.env.PUBLIC_URL + '/images/Image.png'} 
                                    alt="recipe" 
                                    className="recipe__image"
                                /> 
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className="my-2 d-flex justify-content-md-start justify-content-center">
                                <button className="recipe__btn generate-btn">
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
                                    <Col sm={6} className="text-left d-flex align-items-center justify-content-center">
                                        <h4 className="cooking-time__header">Cooking Time: </h4>
                                    </Col>
                                    <Col sm={6} className="text-left cooking-time__text d-flex align-items-center justify-content-center">
                                        {/* DYNAMIC DATA HERE */}
                                        30min / 1h10min
                                    </Col>
                                </Row>
                            </Col>
                            <Col 
                                sm={12} 
                                className="order-md-first"
                                style={{
                                    minHeight:'55vh', 
                                }}
                            >
                                <Ingredients 
                                    ingredientsList={ingredients}
                                />
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </main>
        </>
    )
}

export default Recipe
