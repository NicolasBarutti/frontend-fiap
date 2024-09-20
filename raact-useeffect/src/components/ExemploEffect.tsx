import { useEffect, useState } from "react"

export default function ExemploEffect(){

    const [contagem,SetContagem] = useState(0)

    const [count, setCount] = useState(0)

    // É chamado sempre que tem alguma alteração no ciclo de vida 

    useEffect(()=>{
        console.log('Sempre sou chamado')
    })

    // s´o é chamado quando o componente é criado!

    useEffect(()=>{
        console.log('Só sou chamdo quando o elemento for criado!')
    },[])

    // Só é chamado quando te alteração
    useEffect(()=>{
        if (count != 0){
            console.log(`O valor de Count é: ${count}` )
        }
        
    },[count])

    // É chamado quando o componente é excluido

    useEffect(()=>{
        return()=>{
            console.log('Ops, me excluiram ')
        }
    },[])


    return(
        <div>
            <h2>Exemplo - Effect</h2>
            <p>Valor de Count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Aumentar</button>
            <p>Valor da contagem: {contagem}</p>
            <button onClick={()=>SetContagem(contagem + 1)}>Aumentar Contagem</button>
        </div>
    )
}