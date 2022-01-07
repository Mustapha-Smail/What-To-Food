import express from 'express'
import { getRecipes, getRecipeById, getRandomRecipe } from '../controllers/recipeController.js'
const router = express.Router()

router.route('/').get(getRecipes)

router.route('/random').get(getRandomRecipe)

router.route('/:id').get(getRecipeById)

export default router