import { CabecalhoProps } from "../types"

export default function Cabecalho({titulo,cap,aviso}:CabecalhoProps){

    const parag = {
        color: 'blue',
        fontSize: '20px'

    }
    

    return(
        <div className="div1">
            <h1>{cap} - {titulo}</h1>
            <p style={{color:'red', backgroundColor:'#989'}}>Exemplom interno</p>
            <p>Segundo Paragrafo</p>
            <button onClick={aviso}>Ler aviso</button>
        </div>
    )
}