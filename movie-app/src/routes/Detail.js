import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import MovieDetail from '../components/MovieDetail'

function Detail() {

    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
    console.log(id)
    const getMovie = async () =>{
        const response = await (
           await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
           ).json()
           console.log(response)
           setLoading(false)
           setMovie(response.data.movie)
    }
    useEffect(() => {
        getMovie()
    },[]);
    return (
        <div>
            {
                loading? <h1>Loading...</h1> : 
                <MovieDetail 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.description_intro}
                coverImg={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
                runtime={movie.runtime}
                />
            }
        </div>
    )
}

export default Detail
