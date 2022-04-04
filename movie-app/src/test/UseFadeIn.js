import React,{useEffect, useRef} from 'react'

const useFadeIn = (duration = 1, delay = 0) => {
    
    const element = useRef();
    useEffect(()=>{
        if(element.current){
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    },[])
    if(typeof duration !== 'number' || typeof delay !== 'number'){
        return;
    }
    return {ref: element, style: {opacity:0}}
}

function UseFadeIn() {

    const fadeDiv = useFadeIn(1,2);
    const fadeP = useFadeIn(3,4);
    return (
        <div>
            <h1>UseFadeIn</h1>
            <div {...fadeDiv} style={{opacity:0}}>hello!</div>
            <p {...fadeP}>wowowowowowo!!!</p>
        </div>
    )
}

export default UseFadeIn
