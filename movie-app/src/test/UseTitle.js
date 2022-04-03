import React,{useState, useEffect} from 'react'


const useTitle = (init) => {
    const [title, setTitle] = useState(init);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}


function UseTitle() {

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 2000);
    return (
        <div>
            <h1>UseTitle</h1>
        </div>
    )
}

export default UseTitle
