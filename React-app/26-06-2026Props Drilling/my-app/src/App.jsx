// props drilling
// useContext Hook , createContext , Provider , Consumer 

import Com_A from './components/Com_A'
import { createContext } from 'react'
import './App.css'

export const Name_Context = createContext()
export const Age_Context = createContext()
export const Course_Context = createContext()

function App() {

  let name = "Vishal"
  let age = 19
  let course = "Full Stack Development"

  return (
    <>
      <Name_Context.Provider value={name}>
        <Age_Context.Provider value={age}>
          <Course_Context.Provider value={course}>
            <Com_A />
          </Course_Context.Provider>
        </Age_Context.Provider>
      </Name_Context.Provider>
    </>
  )
}

export default App