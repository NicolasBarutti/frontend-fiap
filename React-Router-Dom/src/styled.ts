import styled from "styled-components";

export const NavMenu = styled.nav`
    width: 100%;
    min-height: 8vh;
    background-color: royalblue;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        color: #fff;
        text-decoration: none;
        font-size: 1.3em;
    }

    span{
        color: #fff;
        font-size: 1.3em;
    }
    

`
export const FOoterRodape = styled.footer`
    width: 100%;
    min-height: 5vh;
    background-color: #222;
    padding: 20p;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: white;
        text-align: center;
    }
`

export const MainGeral = styled.main`
    flex-grow: 1;
    width: 100%;
    padding: 20px;

    h1{
        color: darkred;
        text-align: center;
        margin-bottom: 20px;
    }

    div{
        padding: 15px;
        margin: 5px;
        border: 1px solid darkred;
    }
`
export const MainError = styled.main`
    width: 100px;
    flex-grow: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdd;

    h1{
        color: red;
        text-align: center;
        font-size: 4em;
    }

`