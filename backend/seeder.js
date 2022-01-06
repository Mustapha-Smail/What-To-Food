import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { recipes } from './data/recipes.js'

import Recipe from './models/Recipe.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Recipe.deleteMany()

        const createdRecipe = await Recipe.insertMany(recipes)

        console.log('Data Imported!');
        process.exit()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Recipe.deleteMany()

        console.log('Data Destroyed!');
        process.exit()
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

if (process.argv[2] == '-d') destroyData()
else importData()