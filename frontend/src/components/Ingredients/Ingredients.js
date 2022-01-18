import React, { useState } from 'react'
import './ingredients.css'


const Ingredients = ({ingredientsList}) => {

    const MAX_ITEMS = 3; 
    const [isOpen, setIsOpen] = useState(false)

    const getRenderedItems = () => {
        return isOpen ? ingredientsList : ingredientsList.slice(0, MAX_ITEMS)
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="card__ingredients">
        <h3 className="card__ingredients-header">Ingredients:</h3>
        <ul className="card__ingredients-body">
            {getRenderedItems().map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <div className="card__ingredients-footer d-flex justify-content-end">
            <button 
                className="btn-more"
                onClick={toggle}
            >
                {isOpen ? 'LESS' : 'MORE'}
            </button>
        </div>
    </div>
    )
}

export default Ingredients
