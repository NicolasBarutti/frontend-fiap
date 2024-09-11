import { useState } from "react"

export default function TesteState1(){

    const [nome, setNome] = useState('João')
    

    return(
        <div>
            
        <h2>teste</h2>

        <p>Nome do usuario: {nome}</p>
        <button onClick={()=>setNome('Maria')}>Mudar</button>
        </div>
    )

}