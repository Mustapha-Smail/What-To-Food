import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Recipe = () => {

    const params = useParams()

    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/recipes/${params.id}`)

                if (data) {
                    setRecipe(data)
                }

            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
        console.log(recipe)
    }, [params.id])

    return (
        <>
            {recipe && (
                <>
                    <h1>{ recipe.title }</h1>
                    <img src={recipe.image} alt='imag'/>
                </>
            )}
        </>
    )
}

export default Recipe
