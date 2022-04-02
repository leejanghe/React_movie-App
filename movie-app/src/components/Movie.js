import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Movie({id, coverImg, title, summary, genres}) {
    return (
            <div>
              <img src={coverImg} alt={title}/>
                <h1>
                    <Link to={`/movie/${id}`}>{title}</Link></h1>
                <p>{summary}</p>
                <ul>
                    {genres.map((g)=>
                    <li key={g}>{g}</li>
                    )}
                </ul>
            </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
};

export default Movie