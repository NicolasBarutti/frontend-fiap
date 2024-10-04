"use client"

import { TipoProduto } from "@/types"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Produtos(){

    const[lista, setLista] = useState<TipoProduto[]>([])

    useEffect(()=>{
        const chamaAPi = async ()=>{
            const response = await fetch('http://localhost:3000/api/base-produtos')
            const data = await response .json()
            setLista(data)
        }
        chamaAPi()
    },[])

    return(
        <main>
            <h1>Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <td>Nome</td>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(p=>(
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                <td>{p.preco}</td>
                                <td>{p.estoque}</td>
                                <td><Link href={`/produtos/produto/${p.id}`}>Editar</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}