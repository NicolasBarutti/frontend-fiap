
import { useState } from 'react'
import './App.css'
import Aviao from './components/Aviao'

function App() {
  const [exemplo, setExemplo] = useState(true)
 

  return (
    <>
    <button onClick={()=>setExemplo(!exemplo)}>
      {exemplo ? 'Apagar Avião' : 'Criar Avião'}
    </button>
    {exemplo ?<Aviao/> : ''}
    </>
  )
}

export default App
