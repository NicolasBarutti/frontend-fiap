import { useState } from "react"
import Filho from "./filho"

export default function TesteState4(){

    const[filho, setFilho] = useState<boolean>(false)


    return(
        <div>
            <h2>Teste de Estado 4</h2>
            {filho? < Filho/> : ''}
            <button onClick={()=>setFilho(!filho)}>
                {filho ? 'Excluir Filho' : 'Inserir Filho'}
            </button>
        </div>
    )
}