import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

function Detail() {

    const {id} = useParams();
    console.log(id)
    const getMovie = async () =>{
        const response = await (
           await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
           ).json()
           console.log(response)
    }
    useEffect(() => {
        getMovie()
    },[]);
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}

export default Detail
