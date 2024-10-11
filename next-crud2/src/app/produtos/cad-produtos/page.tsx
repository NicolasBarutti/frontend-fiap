'use client'
import { TipoProduto } from "@/types"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

export default function CadastroProduto(){

    const navigate  =useRouter()

    const [produto, setProduto] = useState<TipoProduto>({
        id:0,
        nome:"",
        preco:0,
        estoque:0
    })
    
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setProduto({...produto,[name]:value})
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify(produto)
        }

        try{
            const response = await fetch('http://localhost:3000/api/base-produtos', cabecalho)

            console.log(response);
            
            
            if(response.ok){
                alert(`${produto.nome} cadastro realizado com sucesso!`)
                setProduto({id:0,nome:"",preco:0,estoque:0})
                navigate.push('/produtos')
            }else{
                alert("Erro ao cadastrar!")
            }
        }catch(error){
            console.error("Erro ao cadastrar produto", error)
        }
    }



    return(
        <main>
            <h1>Cadastro de Produto</h1>
            <p>Aqui insermos um novo produto assim que chega na loja.</p>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="idnome">Nome</label>
                    <input type="text" name="nome" id="idnome" value={produto.nome}onChange = {handleChange}/>
                </div>
                <div>
                    <label htmlFor="idpreco">Preço</label>
                    <input step={'0.01'} type="number" name="preco" id="idpreco" value={produto.preco}onChange = {handleChange} />
                </div>
                <div>
                    <label htmlFor="idestoque">Estoque</label>
                    <input type="number" name="estoque" id="idestoque" value={produto.estoque} onChange = {handleChange}/>
                </div>
                <button type='submit'>Cadastrar Produto</button>
            </form>
        </main>
    )
}