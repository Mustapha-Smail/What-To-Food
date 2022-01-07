import Recipe from '../models/Recipe.js'

// @desc    Fetch all recipes 
// @route   GET /api/recipes
// @access  Public 
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({})

    // Get a random recipe
    const randomRecipe = await Recipe.aggregate([{ $sample: { size:1 }}])

    res.json(recipes)
}

// @desc    Fetch all recipes 
// @route   GET /api/recipes/:id
// @access  Public 
const getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    
    if (recipe) res.json(recipe)
    else {
        res.status(404)
        throw new Error('Recipe not found')
    } 
}


export { getRecipes, getRecipeById }