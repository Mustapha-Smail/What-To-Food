import dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'

import connectDB from './config/db.js'
import recipeRoutes from './routes/recipeRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.use('/api/recipes', recipeRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))



// app.get('/', async (req, res) => {
//     try {
//         const options = {
//             method: 'GET',
//             url: 'https://random-recipes.p.rapidapi.com/ai-quotes/10',
//             headers: {
//               'x-rapidapi-host': 'random-recipes.p.rapidapi.com',
//               'x-rapidapi-key': '3d9ed63ff8msha5369f304662123p1b74ddjsn1ff14e626f4e'
//             }
//         }
    
//         const { data } = await axios.request(options)

//         console.log(data)

//         res.json({data})

//     } catch (error) {
//         console.error(error)
//     }

// })