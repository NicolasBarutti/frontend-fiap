import BookCard from "./components/BookCard"
import { DivApp } from "./styled"
import 

function App() {

  const livros:LivroProps[] = [
    {nome:'Vingadores', autor:'Tonny Stark', ano: 2015,img:'img-book-1.jpg'},
    {nome:'Liga da Justiça', autor:'Bruce Wane', ano: 2007,img:'img-book-.2jpg'},
    {nome:'Missão impossível', autor:'Tom Cruise', ano: 2011,img:'img-book-3.jpg'},
    {nome:'Naruto', autor:'Naruto', ano: 2009,img:'img-book-4.jpg'},
    {nome:'aAventuras de Pi', autor:'PI', ano: 2025,img:'img-book-5.jpg'}
  ]
 
  return (
    <DivApp>
      <h1>BookCards</h1>
      <div>
        {
          livros.map((livro,index)=>(
            <BookCard index={index} nome={livro.nome} autor={livro.autor} ano={livro.ano} img={livro.img}/>
          ))
        }
      </div>
    </DivApp>
  )
}

export default App
