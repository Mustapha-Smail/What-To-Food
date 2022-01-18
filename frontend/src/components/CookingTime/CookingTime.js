import React from 'react'
import { Col } from 'react-bootstrap'

const CookingTime = ({time}) => {
    return (
        <>
            <Col sm={6} className="text-left d-flex align-items-center justify-content-center">
                <h4 className="cooking-time__header">Cooking Time: </h4>
            </Col>
            <Col sm={6} className="text-left cooking-time__text d-flex align-items-center justify-content-center">
                {time 
                    ? time.map((t, i) => (
                        <span key={i}>{t} / </span>
                    ))
                    : '---'
                }
            </Col>
        </>
    )
}

export default CookingTime
