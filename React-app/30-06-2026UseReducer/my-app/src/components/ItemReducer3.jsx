import React from 'react'
import { useReducer } from 'react'

const ItemReducer3 = () => {

    const initialState = {
    counters:[
        {id:1 , count:10},
        {id:2 , count:20}
    ],
    total:30
}

    const Reducer = (state , action) => {
        switch(action.type){
            case 'INCREMENT' : 
            return {
                ...state,
                counters:[
                    {id:1 , count:state.counters[0].count + 1},
                    {id:2 , count:state.counters[1].count + 1}
                ],
                total: state.counters[0].count + 1 + state.counters[1].count + 1
            }
            case 'DECREMENT' :
                if(state.counters[0].count > 0){
                    return {
                        ...state,
                        counters:[
                            {id:1 , count:state.counters[0].count - 1},
                            {id:2 , count:state.counters[1].count - 1}
                        ],
                        total: state.counters[0].count -1 + state.counters[1].count - 1
                    }
                }
                return state
            case 'RESET' :
                return initialState
            default:
                return state

        }
    }

    const [count , dispatch] = useReducer(Reducer , initialState);


  return (
    <div>
      <div>
        <h1>useReducer Hook In Reactjs</h1>
        <div>
            count : {count.counters[0].count}
        </div>
        <div>
            count : {count.counters[1].count}
        </div>
         <div>
            total : {count.total}
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

export default ItemReducer3