import React from 'react'
import { Figure } from './styles'
import { Link } from 'react-router-dom'

const Movie = (props) => {
    return (
        <Figure>
            <Link to={`/${props.id}`}>
                <div 
                    onMouseOver={() => props.movieIn(props.imageSrc)}
                    onMouseLeave={() => props.movieIn(false)}
                    >
                    <label>{props.title}</label>
                    <img src={props.imageSrc} alt={props.title} />
                </div>
            </Link>
        </Figure>
    )
}

export default Movie
