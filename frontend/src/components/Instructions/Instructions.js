import React from 'react'
import { Col } from 'react-bootstrap'

import './instructions.css'

const Instructions = ({instructionsList}) => {
    return (
        <Col sm={12} className="px-5 py-4 instructions">
            <h3 class="instructions__header">Instructions: </h3>
            <ul class="p-3 instructions__content">
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
