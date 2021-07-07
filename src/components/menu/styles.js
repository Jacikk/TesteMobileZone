import styled from "styled-components";

export const MenuContainer = styled.div`
    height: fit-content;
`
export const MenuSection = styled.div`
    height: fit-content;
    width: 90%;
    background-color: rgb(73, 139, 62);
    border-radius: 0 13px 13px 0;
    
    &:not(:first-child){
        margin-top: 5px;
    }
`
export const MenuItem = styled.button`
    height: fit-content;
    width: 90%;
    background-color: rgb(73, 139, 62);
    border-radius: 13px;
    border-style: none;
    margin-left: 5%;
`