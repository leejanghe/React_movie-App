import React from 'react'

const useNotification = (title, options) => {
    if(!("Notification" in window)){
        return;
    }
    const fireNotif = () => {
        if(Notification.permission !== "granted"){
            Notification.requestPermission().then(permission => {
                if(permission === "granted"){
                    new Notification(title, options);
                    console.log("Notification granted")
                }else{
                    console.log("Notification denied")
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
}

function UseNotification() {

    const triggerNotif = useNotification("Hi! Joycoding", {body: "Gool Luck!"});

    return (
        <div>
            <h1>UseNotification</h1>
            <button onClick={triggerNotif}>click me!</button>
        </div>
    )
}

export default UseNotification
