import React from 'react'
import { Col } from 'react-bootstrap'

import './instructions.css'

const Instructions = ({instructionsList}) => {
    return (
        <Col sm={12} className="px-md-5 py-4 instructions">
            <h3 className="instructions__header">Instructions: </h3>
            <ul className="p-3 instructions__content">
                {instructionsList && instructionsList.map((instruction, index) => (
                    <li key={index}>
                        {instruction.text}
                    </li>
                ))}
            </ul>
        </Col>
    )
}

export default Instructions
