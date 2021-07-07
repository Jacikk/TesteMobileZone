import styled from "styled-components";


export const DestatqueContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: calc(100% - 20px -20px);
    height: 128px;
    background-color:red;
    border-radius: 13px;
    margin: 10px 20px 10px 20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -150px;
    &:first-child{
        margin-top: 20px;
    }
`

export const Faixa = styled.div`
    display: flex;
    background-color: rgb(255, 245, 17);
    height: 48px;
    width: 15%;
    transform: rotate(-45deg);
    align-self: center;
    border-style: solid;
    border-width: 0 48px 0 48px;
    border-color: rgb(255, 245, 17);
    justify-content: center;
    align-items: center;

`