import express from 'express'
import { getRecipes, getRecipeById } from '../controllers/recipeController.js'
const router = express.Router()

router.route('/').get(getRecipes)

router.route('/:id').get(getRecipeById)

export default router