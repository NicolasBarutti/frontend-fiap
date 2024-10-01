import styled from "styled-components";

export const DivApp = styled.div`
    width:  100%;
    height: 100 vh;

    div{
        padding: 20px;
        display: flex;
        justify-content: space-evenly;
    }
`

export const DivBookCard = styled.div`
    
    border: 1px solid black;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2{
        text-align: center;
        margin-bottom: 10px;

    }

    img{
        max-width: 100%;

    }

    p{
        text-align: center;
        align-items: center;
    }


`