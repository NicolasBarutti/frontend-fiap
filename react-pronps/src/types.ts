export type CabecalhoProps = {
    titulo:string
    cap:number
    aviso:()=>void
}

export type AlunosProps={
    children: React.ReactNode
}
export interface ProfessoresProps{
    nome: string;
    disciplina:string;
    ano:number;
}