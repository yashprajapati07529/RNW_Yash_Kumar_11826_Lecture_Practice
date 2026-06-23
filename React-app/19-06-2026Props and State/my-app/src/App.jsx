import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  console.log(count, name);


  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>Name : {name}</div>
    </>
  )
}

export default App