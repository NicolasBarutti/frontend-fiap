import { Link } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"
import { MainGeral } from "../../styled"

export default function Produtos() {

    return (
        <MainGeral>
            <h1>Produtos</h1>
            {
                listaProdutos.map(prod=>(
                    <div key={prod.id}>
                        {prod.nome} - <Link to={`/produtos/editar/${prod.id}`}>Editar Produto</Link>

                    </div>
                ))
            }
        </MainGeral>
    )
}