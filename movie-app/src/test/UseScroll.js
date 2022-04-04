import React,{useEffect, useState} from 'react'

const useScroll = () => {
    const [state, setState] = useState({
        x:0,
        y:0
    })
    const handleScroll = () => {
        setState({y: window.scrollY, x: window.scrollX})
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
    return state;
}


function UseScroll() {
    
    const {x,y} = useScroll();

    return (
        <div style={{height:"1000vh"}}>
            <h1 style={{position:"fixed", color: y >400 ? "red":"blue"}}>UseScroll</h1>
        </div>
    )
}

export default UseScroll
