import './App.css'
import { Button , Inputs , Mouse_Event , Double_Click } from './components/Events'
import { ShowName , DataMap , Object_Data } from './components/Argument_Events'
import { Render1 } from './components/Conditional_Rendering'

function App() {

  return (
    <>
      <Button/>
      <Inputs/>
      <Mouse_Event/>
      <Double_Click/>
      <ShowName/>
      <DataMap/>
      <Object_Data/>
      <Render1/>
    </>
  )
}

export default App