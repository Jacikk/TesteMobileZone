import styled from "styled-components";


export const GridContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-height: 100vh;

    .withMargin{
        margin-top: 150px;
    }
    
`
export const Gridleft = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    min-height: max-content;
    background-color: rgb(196, 196, 196, 0.2);
    margin-left:5vw;
    
    `
export const Gridmiddle = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    min-height: max-content;
    background-color: rgb(196, 196, 196, 0.2);
     
`
export const Gridright  = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    min-height: max-content;
    background-color: rgb(196, 196, 196, 0.2);  
    margin-right:5vw;
    
`