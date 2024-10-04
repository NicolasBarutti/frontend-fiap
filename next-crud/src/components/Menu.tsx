import Link from "next/link"

export default function Menu(){

    return(
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <span> | </span>
                <li><Link href={'/produtos'}>Produtos</Link></li>
                <span> | </span>
                <li><Link href={'/produtos/cad-produtos'}>Cadastro de Produtos</Link></li>
                <span> | </span>
            </ul>
        </nav>
    )
}