import React from 'react'
import { useState,useEffect } from 'react'

function App() {

  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
    // 암시적으로 변환 =()=>
    .then((response)=> response.json())

    // 리턴을 통해 반환 =()=>{}
    .then((json) => {
    setCoins(json)
    setLoading(false)
    })
  },[])
  return (
    <div>
      <h1>The coins! {loading?"":`(${coins.length})`}</h1>
      {loading? <p>Loading...</p> : 
      <ul>
      {coins.map((coin, idx)=>(
        <li key={idx}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</li>
      ))}
    </ul>
      }
    </div>
  )
}

export default App
