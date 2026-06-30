import React from 'react'
import { useReducer } from 'react'

const ItemReducer = () => {

    const initialState = [{count : 10 , count2 : 20}];

    const Reducer = (state , action) => {
        switch(action.type){
            case 'INCREMENT' : 
                return [{count : state[0].count + 1 , count2 : state[0].count2 + 1}]
            case 'DECREMENT' :
                if(state[0].count > 0){
                    return [{count : state[0].count - 1 , count2 : state[0].count2 - 1}]
                }
                return state
            case 'RESET' :  
                return initialState
            default:
                return state

        }
    }

    const [state , dispatch] = useReducer(Reducer , initialState);


  return (
    <div>
      <div>
        <h1>useReducer Hook In Reactjs</h1>
        <div>
            count : {state[0].count}
        </div>
        <div>
            count2 : {state[0].count2}
        </div>
        <div>
            <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default ItemReducer


// const initialState = [{count:10 , count2:20}]

// const initialState = {count:10 , count2:20}

/*
const initialState = {
    counters:[
        {id:1 , count:10},
        {id:2 , count:20}
    ],
    total:30
}
*/