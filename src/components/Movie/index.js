import React from 'react'
import { Figure } from './styles'
import { Link } from 'react-router-dom'

const Movie = ({ ...props }) => {
    return (
        <Figure>
            <Link to={`/${props.id}`}>
                <label>{props.title}</label>
                <img src={props.imageSrc} alt={props.title} />
            </Link>
        </Figure>
    )
}

export default Movie
