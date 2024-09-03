import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../listaProdutos"
import { ItemProduto } from "../../types"
import { MainGeral } from "../../styled"

export default function EditarProdutos() {

    const lista:ItemProduto[] = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()
    const idProd:number = Number(id)


    const proc = lista.filter(prod=>prod.id === idProd)
    const produto = proc[0]
    const salvar = ()=>{
        alert(`Produto ${produto.nome} foi editado com sucesso`)
        return navegacao('/produtos')
    }

    return (
        <MainGeral>
            <h1>Editar Produtos</h1>
            <p>Editando os dados do produto: {produto.nome}</p>
            <button onClick={salvar}>Salvar</button>
        </MainGeral>
    )
}