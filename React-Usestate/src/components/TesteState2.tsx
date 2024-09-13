import { useState } from "react"

export default function TesteState2(){

    const [count, setCount] = useState<number>(0)

    let valor = 0

    const aumentar = ()=>{
        setCount(count+ 1)
        valor = valor+ 1
    }
    return (
        <div>
            <h1>Teste de Estado 2</h1>
            <p>Contagem:{count}</p>
            <p>Valor = {valor}</p>
            <button onClick={aumentar}>Aumentar</button>
            {/* <button onClick={()=>setCount(count-1)}>Diminuir</button> */}
            {/* <button onClick={()=>setCount(count+1)}>Aumentar</button> */}
        </div>
    )
}