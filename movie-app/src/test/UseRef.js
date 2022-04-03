import React, {useEffect, useState, useRef} from 'react'

function UseRef() {

    const popo = useRef();
    setTimeout(() => popo.current.focus(), 2000);

    return (
        <div>
            <h1>UseRef</h1>
            <input ref={popo} placeholder="la"/>
        </div>
    )
}

export default UseRef
