import mongoose from 'mongoose'

const instructionsSchema = mongoose.Schema({
    instructionType: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, 
})

const recipeSchema = mongoose.Schema({
    identifiant: {
        type: String, 
        required: true,
    },
    title: {
        type: String, 
        required: true,
    },
    ingredients: {
        type: [String], 
        required: true,
    },
    instructions: [{
        instructionType: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    }],
    times: {
        type: Array,
        default: [],
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, 
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export default Recipe