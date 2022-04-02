import React from 'react'

function MovieDetail({title, summary, coverImg, genres, rating, runtime}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h1>{title}</h1>
            <h2>{summary}</h2>
            <ul>
                    {genres && genres.map((g)=>
                    <li key={g}>{g}</li>
                    )}
            </ul>
            <p>{rating}</p>
            <p>{runtime}</p>
        </div>
    )
}

export default MovieDetail
