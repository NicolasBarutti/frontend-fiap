import { listaProduto } from "@/listaProdutos"
import { useParams } from "next/navigation"

export default function EditarProdutos(){

    const {id} = useParams()

    const idProds: number = Number()

    const proc = listaProduto.filter(p=>p.id === idProds)

    return(
        <div>
            <h1>Editar Produtos</h1>
            <p>{`O produto ${proc[0].nome} está pronto para ser editado!`}</p>
        </div>
    )
}