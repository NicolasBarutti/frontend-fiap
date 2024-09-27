"use client"

import { TarefaProps } from "@/types";
import React, { useState } from "react";
import FormTarefa from "./FormTarefas";
import Tarefas from "./tarefas";

export default function ListaTarefa() {

    const [tarefas, setTarefas] = useState<TarefaProps[]>([])

    const [tarefa, setTarefa] = useState(
        { titulo: '', setor: '', descricao: '' }
    )

    const addTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTarefas([...tarefas, tarefa])
        setTarefa({ titulo: '', setor: '', descricao: '' })
    }

    const captura = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTarefa({ ...tarefa, [name]: value })
    }

    const removeTarefa = (tit: string) => {
        let lista = tarefas
        lista = lista.filter(t => t.titulo !== tit)
        setTarefas(lista)
    }


    return (
        <div className="lista-tarefa">
            <FormTarefa {...tarefa} add={addTarefa} digit={captura} />
            {
                tarefas.map((t, i) => (
                    <Tarefas key={i}{...t} remove={removeTarefa} />
                ))
            }
        </div>
    )
}