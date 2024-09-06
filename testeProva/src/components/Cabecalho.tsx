export default function Cabecalho(props: { titulo: string, aviso: Function }) {

    document.title = props.titulo


    return (
        <header>
            <h1>{props.titulo}</h1>
            <button onClick={() => props.aviso}>Aviso app</button>
        </header>

    )
}