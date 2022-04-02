import React from 'react'
import { useState,useEffect } from 'react'
import Movie from '../components/Movie'
import styles from './Home.module.css'

function Home() {
    const [loading,setLoading] = useState(true)
 const [movies,setMovies] = useState([])
 const getMovies = async()=>{
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    const data = await response.json()
    setMovies(data.data.movies)
    setLoading(false)
 }
 useEffect(()=>{
    getMovies()
 },[]);
 console.log(movies)

  return (
      <>
    <h1 className={styles.title}>Movie App</h1>
    <div>
      {loading? <h1>Loading...</h1> : 
      <div>
        {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              coverImg={movie.medium_cover_image}
              genres={movie.genres}
          />
        ))}
      </div>
      }
    </div>
    </>
  )
}

export default Home
