import React, { useEffect } from 'react'

const useBeforLeave = (onBefore) => {
        const handle = event => {
        console.log(event.clientY)
        const {clientY} = event;
        if(clientY <= 0){
            onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener("mouseleave",handle);
        return () => document.removeEventListener("mouseleave",handle);
    },[]);

    if(typeof onBefore !== 'function'){
        return;
    }
}

function UseBeforeLeave() {
    const begForLife = () => console.log("plz dont leave")
    useBeforLeave(begForLife);
    return (
        <div>
            <h1>UseBeforeLeave</h1>
        </div>
    )
}

export default UseBeforeLeave
