import React,{useEffect, useRef} from 'react'


const useClick = (onClick) => {
    const element = useRef();
    useEffect(()=>{
        if(element.current){
            element.current.addEventListener('click', onClick);
        }
    })
    return element;
}

function UseClick() {

    const sayHi = () => console.log("hi")
    const title = useClick(sayHi);

    return (
        <div>
            <h1 ref={title}>UseRef</h1>
        </div>
    )
}

export default UseClick
