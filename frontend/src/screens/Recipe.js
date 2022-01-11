import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Navbar } from '../components'

import image from '../images/Image.png'

const Recipe = () => {


    return (

        <>
            <Navbar />
            <main className="section__padding my-2">
                <section className="row my-2">
                    <div className="col-md-8 text-left">
                        <h1 className="recipe__title">Broken Lasagna With Parmesan and All the Peas</h1>
                    </div>
                    <div className="col-md-4 text-right mt-5 rating">
                        <a href="#">(8 reviews)</a>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star-half-alt    "></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                    </div>
                </section>
                <section className="row py-3">
                    <div className="col-md-8">
                        <div className="row mb-3">
                            <div className="col-12">
                                <img src={image} alt="recipe image" className="recipe__image" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 my-2 text-md-left text-center">
                                <button className="recipe__btn generate-btn">GENERATE</button>
                            </div>
                            <div className="col-md-4  offset-md-4 my-2 text-md-right text-center">
                                <button className="recipe__btn save-btn">SAVE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-12 my-4">
                                <div className="row my-3">
                                    <div className="col-6 text-left">
                                        <h4 className="cooking-time__header">Cooking Time: </h4>
                                    </div>
                                    <div className="col-6 text-left cooking-time__text">30min / 1h10min</div>
                                </div>
                            </div>
                            <div className="col-12 order-md-first">
                                <div className="card__ingredients">
                                    <h3 className="card__ingredients-header">
                                        Ingredients:
                                    </h3>
                                    <ul className="card__ingredients-body">
                                        <li>Kosher salt</li>
                                        <li>12 oz. lasagna noodles (not no-boil)</li>
                                        <li>8 oz. snow peas, trimmed (about 3 cups)</li>
                                        <li>1 cup shelled fresh peas (from about 1 lb. pods)or frozen peas, thawed</li>
                                        <li>Zest and juice of 1 lemon</li>
                                        <li>Kosher salt</li>
                                        <li>12 oz. lasagna noodles (not no-boil)</li>
                                        <li>8 oz. snow peas, trimmed (about 3 cups)</li>
                                        <li>1 cup shelled fresh peas (from about 1 lb. pods)or frozen peas, thawed</li>
                                        <li>Zest and juice of 1 lemon</li>
                                        <li>Kosher salt</li>
                                        <li>12 oz. lasagna noodles (not no-boil)</li>
                                        <li>8 oz. snow peas, trimmed (about 3 cups)</li>
                                        <li>1 cup shelled fresh peas (from about 1 lb. pods)or frozen peas, thawed</li>
                                        <li>Zest and juice of 1 lemon</li>
                                    </ul>
                                    <div className="card__ingredients-footer text-right">
                                        <button className="btn-more">More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row my-5">
                    <div className="col-12 px-5 py-4 instructions">
                        <h3 className="instructions__header">Intructions: </h3>
                        <ul className="p-3 instructions__content">
                            <li>
                                Break each noodle into 3 or 4 rough squares and add to a large pot of boiling generously salted
                                water. (It’s okay if a few smaller pieces break off in the process; add them to the pot too,
                                along with any stray shards at the bottom of the box.) Cook, stirring occasionally and adding
                                snow peas and shelled peas for the final 2 minutes, until al dente, 8–12 minutes. Drain pasta
                                and peas, reserving 2 cups pasta cooking liquidentifiant.
                            </li>
                            <li>
                                Meanwhile, combine lemon zest and juice, Parmesan, butter, and 1½ tsp. pepper in a large bowl.
                                Add pasta, peas and 1 cup reserved pasta cooking liquidentifiant and toss, adding more pasta
                                cooking liquidentifiant as needed if mixture looks dry, until Parmesan and butter are melted and
                                noodles are well coated. Add sugar snap peas; toss again just to combine.
                            </li>
                            <li>
                                Dividentifiante pasta among shallow bowls and top with shaved Parmesan and cracked pepper.
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="row my-5">
                    <div className="col-12 mb-3">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="row">
                                    <div className="col-6 text-left">
                                        <h3>Add a Review:</h3>
                                    </div>
                                    <div className="col-6 text-right">
                                        <div className="plus">
                                            <i className="fas fa-plus-circle fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <textarea className="form-control review-input" name="addReview" rows="1"
                                    placeholder="write your review here..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 py-3 text-center">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <i className="fas fa-user-circle fa-3x" aria-hidden="true"></i>
                                        <h4>User Name</h4>
                                    </div>
                                    <div className="card-body text-left">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-3 offset-md-9 d-flex justify-content-md-end">
                                <button className="btn btn-more">MORE</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Recipe
