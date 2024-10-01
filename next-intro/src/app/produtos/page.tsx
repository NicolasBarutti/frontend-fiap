import { listaProduto } from "@/listaProdutos";
import Link from "next/link";
export default function Produtos(){

    return(
        <div>
            <h1>Produtos</h1>
            {
                listaProduto.map(p=> 
                <p key={p.id}>{`O produto ${p.nome} custa ${p.preco}`} 
                <Link href={`/produtos/editar/${p.id}`}>Editar</Link>
                </p>
                )
            }
        </div>
    )
}