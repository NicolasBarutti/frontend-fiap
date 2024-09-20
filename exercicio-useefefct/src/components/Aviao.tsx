import { useEffect, useState } from "react"

export default function Aviao(){

    const [aumentar, setAumentar] = useState(0)

    useEffect(()=>{
        console.log('O avião está ligado')
    })

    useEffect(()=>{
        console.log('O avião decolou')
    },[])

    useEffect(()=>{
        if(aumentar != 0)
            console.log(`O avião está em ${aumentar} pés`)
    },[aumentar])

    useEffect(()=>{
        return()=>{
            console.log('O avião foi excluido')
        }
    },[])

    return(
        <div>
            <h2>Avião</h2>
            <p>Contagem: {aumentar}</p>
            <button onClick={()=>setAumentar(aumentar + 100)}>Aumentar Altura</button>

        </div>
    )
}