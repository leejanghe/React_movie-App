import React, { useEffect,useState } from 'react'


const useNetwork = onchange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {

        if(typeof onchange === "function"){
            onchange(status);
        }
        setStatus(navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener('online', handleChange);
        window.addEventListener('offline', handleChange);
    },[])
    return status;
}

function UseNetwork() {
    const handleNetworkChange = (online) =>{
        console.log(online?"we just went online":"we are offline")
    }
    const onLine = useNetwork(handleNetworkChange)

    return (
        <div>
            <h1>UseNetwork</h1>
            <div>{onLine ? "Online":"Offline"}</div>
        </div>
    )
}

export default UseNetwork
