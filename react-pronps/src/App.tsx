import Alunos from "./components/Alunos"
import Cabecalho from "./components/Cabecalho"
import Professores from "./components/Professores"
import { ProfessoresProps } from "./types"
import './App.css'

function App() {
  
  const titulo: string = "React - Aula Props"

  document.title = titulo

  const cap: number = 15

  const aviso = ()=> alert('Esta aula ensina a passar valores de pai para filho')
  
  const listaProf:ProfessoresProps[] = [
    {nome:'Luis', disciplina:'Front-End',ano:1},
    {nome:'Carlos Freitas', disciplina:'Sofware Design',ano:1},
    {nome:'Thiago Yamamoto', disciplina:'Java Advanced',ano:2}

  ]

  return (
    <>
     <Cabecalho titulo={titulo} cap={cap} aviso={aviso}/>
     <Alunos>
      <h2>Lista Alunos</h2>
      <ul>
        <li>João</li>
        <li>Carlos</li>
        <li>Marcos</li>
        <li>Maria</li>
      </ul>
     </Alunos>
     {
      listaProf.map((prof,index)=>(
      <Professores index={index}nome={prof.nome} disciplina={prof.disciplina}ano={prof.ano}/>
    ))
     }
 
    </>
  )
}

export default App
