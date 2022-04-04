import React from 'react'


const useConfirm = (msg ="", cal, rej) => {
    if(typeof cal !== 'function'){
        return;
    }
    const confirmAction = () => {
        if(window.confirm(msg)){
            cal();
        }else{
            rej();
        }
    }
    return confirmAction;
}

function UseConfirm() {

    const deleteWorld = () => console.log('delete world')
    const abort = () => console.log('abort')
    const confirmDelete = useConfirm('Are you sure?', deleteWorld, abort);

    return (
        <div>
            <h1>UseConfirm</h1>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default UseConfirm
