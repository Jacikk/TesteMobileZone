import styled from 'styled-components'


export const CardContainer = styled.div`
    display: flex;
    width: 256px;
    height: 128px;
    background-color: white;
    border-radius: 13px;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 20px;

    .faixaDePreco {
        display: flex;
        width: 145px;
        height: 50px;
        background-color: #FFF511;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        
        align-self: flex-end;
        border-bottom-left-radius: 13px;
    }

    .direita{
        margin-left: 111px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 13px;
    }
`

export const CardSection = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`