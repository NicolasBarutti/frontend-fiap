
import Cabecalho from "./components/Cabecalho"
import Carros from "./components/Carros"


function App() {

  const titulo: string = "Pagina inicial"
  const aviso = () => alert("Obrigado por clicar no botão")

  return (
    <>
      <Cabecalho titulo={titulo} aviso={aviso} />
      <Carros />

    </>
  )
}

export default App
