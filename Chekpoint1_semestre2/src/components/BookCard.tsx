type LivroProps = {
    nome:string;
    autor:string;
    ano:number | string;
    img:string
}

type KeyProps ={
    index:number;
}

export default function BookCard({nome,autor,ano,img,index}:LivroProps & KeyProps){

    return(
        <div key={index}>
            <h2>{nome}</h2>
            <img src={img} alt={nome} />
            <p>{autor}</p>
            <p>{ano}</p>
        </div>
    )
}