import Link from "next/link"

export default function ListaServico(){

    return(
        <div>Lista de Servico
            <ul>
                <li><Link href={'/servico/manutencao'}>Manutencao</Link></li>
                <li>Roubo</li>
                <li>Hash</li>
            </ul>
        </div>
    )
}