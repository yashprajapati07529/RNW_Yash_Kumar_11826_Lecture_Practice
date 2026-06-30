// props drilling
// useContext Hook , createContext , Provider , Consumer 
import ItemReducer from './components/ItemReducer'
import ItemReducer2 from './components/ItemReducer2'
import ItemReducer3 from './components/ItemReducer3'
import './App.css'



function App() {

  

  return (
    <>
     {/* <ItemReducer />
     <ItemReducer2 /> */}
      <ItemReducer3 />  
    </>
  )
}

export default App