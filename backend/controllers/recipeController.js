import asyncHandler from 'express-async-handler'
import Recipe from '../models/Recipe.js'

// @desc    Fetch all recipes 
// @route   GET /api/recipes
// @access  Public 
const getRecipes = asyncHandler (async (req, res) => {
    const recipes = await Recipe.find({})
    
    res.json(recipes)
})

// @desc    Fetch all recipes 
// @route   GET /api/recipes/:id
// @access  Public 
const getRecipeById = asyncHandler (async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    
    if (recipe) res.json(recipe)
    else {
        res.status(404)
        throw new Error('Recipe not found')
    } 
})

//@desc     Generate a random recipe
//@route    GET /api/recipes/random
//@access   Public
const getRandomRecipe = asyncHandler (async (req, res) => {

    const randomRecipes = await Recipe.aggregate([{ $sample: { size:1 }}])

    const randomRecipe = randomRecipes[0]

    if (randomRecipe) {
        res.json({
            id: randomRecipe._id
        })
    } else {
        res.status(500)
        throw new Error('Internal Server Error')
    }
})

export { getRecipes, getRecipeById, getRandomRecipe }