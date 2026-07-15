import React from "react";
import { useState } from "react";

const Button = () =>{

    
    const initialState = 20;
    
    const [count ,SetCount] = useState(initialState);

    return(

        <>

        <div>

        <h1>The COUNTER APP </h1>

        <h1>Counter : {count} </h1>
        <hr />

        <button onClick={() =>SetCount(count+1) }>INCREMENT</button>
        <hr />
        <button onClick={() =>  SetCount( (count > 0 ) ? count - 1 : 0)}>DECREMENT</button>
        <hr />
        <button onClick={() =>  SetCount(initialState)}>Reset</button>
        
        
        </div>
        
        </>
    )

}

export default Button