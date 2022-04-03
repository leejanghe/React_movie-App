import React,{useEffect, useState} from 'react'

function UseEffect() {

    const [num, setNum] = useState(0);
    const [anum, setAnum] = useState(0);

    const sayHi = () => console.log("hi")

    useEffect(sayHi, [])

    return (
       
        <div>
            <h1>UseEffect</h1>
            <button onClick={()=> setNum(num+1)}>{num}</button>
            <button onClick={()=> setAnum(anum+1)}>{anum}</button>
        </div>
       
    )
}

export default UseEffect
