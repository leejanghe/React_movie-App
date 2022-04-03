import React, {useState} from 'react'


const useInput = (initialValue, vaildator) =>{
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        const {
            target: {value}
        } = e;
        let willUpdate = true;
        if(typeof vaildator === 'function'){
            willUpdate = vaildator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    }
    return {value, onChange}
};

function Useinput() {
    const maxLen = (value) => !value.includes("1");
    const name = useInput('Mr' , maxLen);

    return (
        <div>
            <h1>useInput</h1>
            <input placeholder="Name" {...name}/>
        </div>
    )
}

export default Useinput
