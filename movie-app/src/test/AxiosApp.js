import React from 'react'
import useAxios from './useAxios'

function AxiosApp() {

    const {loading, data, error} = useAxios({
        url:'https://yts.mx/api/v2/list_movies.json'
    })
    console.log(`loading: ${loading}\nError:${error}\nData:${data}`)

    return (
        <div>
            <h1>gg</h1>
        </div>
    )
}

export default AxiosApp
