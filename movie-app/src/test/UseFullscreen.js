import React, { useRef } from 'react'

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if(element.current){
            element.current.requestFullscreen();
            if(callback && typeof callback === 'function'){
                callback(true);
            }
        }
    }
    const exitFull = () => {
        document.exitFullscreen();
        if(callback && typeof callback === 'function'){
            callback(false);
        }
    }
    return {element, triggerFull, exitFull}
};

function UseFullscreen() {
    const onFulls = (isFull) => console.log(isFull? "full" : "not full")
    const {element, triggerFull, exitFull} = useFullscreen(onFulls);

    return (
        <div>
            <h1>UseFullScreen</h1>
            <div ref={element}>
            <img width="50%" src="https://cdn.smartcitytoday.co.kr/news/photo/202005/img_5713_0.jpg"/>
            <button onClick={exitFull}>exit</button>
            </div>
            <button onClick={triggerFull}>full screen</button>
        </div>
    )
}

export default UseFullscreen
