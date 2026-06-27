/*  

1. Working With Events

onClick
onDoubleClick
onChnage
onSubmit
onMouseEnter
onMouseLeave
onFocus
onBlur


2. Passing Arguments to Event Handlers



3. Conditional Rendering

*/

import { useState } from "react"


export const Button = () => {
    const handleClick = () => {
        alert("Button Clicked.....")
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export const Inputs = () => {
    const [name, setName] = useState('')

    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <h2>{name}</h2>

        </>
    )
}

export const Mouse_Event = () => {
    return(
        <>
            <div onMouseEnter={() => console.log("Mouse Enter")} onMouseLeave={() => console.log("Mouse Leave")}>Hover Here</div>
        </>
    )
}

export const Double_Click = () => {
    const handleDoubleClick = () => {
        alert("Double Click")
    }

    return(
        <>
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </>
    )
}