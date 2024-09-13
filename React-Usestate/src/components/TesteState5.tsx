import { useState } from "react";

export default function TesteState5(){

    const[carros, setCarros] = useState<string[]>(['Onix' , 'Polo' , ' HB20'])
    const [carro, setCarro] = useState<string>('')

    return(
        <div>
            <h2>Teste de Estado</h2>
            <p>Carros : {carros.map(car=> <span>{car} - </span>)}</p>
            <input type="text" 
                    placeholder="Novo Carro"
                    onChange={(e)=>setCarro(e.target.value)}
            />
            <button onClick={() =>setCarros([...carros, carro])}>Inserir</button>
            <button onClick={() =>setCarros([])}>Apagar Todos</button>
        </div>
    )
}