import React, {useState} from 'react'

const content = [
    {
        tab:"Section1",
        content: "I m the content of section 1"
    },
    {
        tab:"Section2",
        content: "I m the content of section 2"
    },
]

const useTabs = (initTab, allTabs) =>{
    const [currentTab, setCurrentTab] = useState(initTab);
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    return {
        currentItem: allTabs[currentTab],
        changeItem: setCurrentTab
    }
}

function UseTabs() {

    const {currentItem, changeItem} = useTabs(0, content);

    return (
        <div>
            {content.map((section, index) => (
                <button onClick={()=> changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    )
}

export default UseTabs
