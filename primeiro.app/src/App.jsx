import Componete1 from "./components/Componente1"

function App() {
  // pode fazer direto 
  const aluno ="João"
  
  return (
    <>
      <h1>Primeira aula</h1>
      <p>Olá mundo</p>
      <p>O aluno {aluno}</p>
      <Componete1/>
    </>
    
  )
}

export default App
