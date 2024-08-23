import { ProfessoresProps } from "../types"
import estilo from './Professores.module.css'

export default function Professores({nome, disciplina,ano,index}:ProfessoresProps&{index:number}){
    return(
        <div className={estilo.div3} key={index}>
            <p>Nome: {nome}</p>
            <p>Disciplina: {disciplina}</p>
            <p>Ano: {ano}</p>
        </div>
    )
}