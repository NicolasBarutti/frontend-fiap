type comp1Prps = {
    curso:string;
    aviso: ()=>void;
}
export default function Componete1({curso,aviso}:comp1Prps){

    return(
        <div>
            <p>Introdução d react com Typescript</p>
            <p>O curso é de {curso}</p>
            <button onClick={aviso}>Clique aqui</button>
        </div>
    )
    
}