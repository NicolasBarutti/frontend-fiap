import styled from "styled-components"

const DivComp1 = styled.div`
    border:2px solid lime;
    background-color: gray;
    padding: 15px;

    h2{
        color: lime;
    }

    p{
        color: white;
        font-size: 1.3em;
    }
`
    
export default function Componente1(){
    <DivComp1>
        <h2>Componete 1</h2>
        <p>Este é o componente 1</p>
    </DivComp1>
    
}