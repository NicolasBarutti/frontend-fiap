import { useState } from "react"

export default function TesteState1(){

    const [nome, setNome] = useState<string>('João')
    

    return(
        <div>
            
        <h2>Teste</h2>

        <p>Nome do usuario: {nome}</p>
        <button onClick={()=>setNome('Maria')}>Mudar</button>
        </div>
    )

}