import { useState } from "react"

export default function TesteState2(){

    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Teste de Estado 2</h1>
            <p>Contagem:{count}</p>
            <button onClick={()=>setCount(count+1)}>Aumentar</button>
            <button onClick={()=>setCount(count-1)}>Diminuir</button>
        </div>
    )
}