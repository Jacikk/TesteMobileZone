import { FC } from "react";
import { GridContainer, Gridleft, Gridright, Gridmiddle } from "./styles";

interface props {
    children?: React.ReactChild
    | React.ReactChild[];
}

export const GridLeft:FC<props> = ({children}) => {

    return<Gridleft>
        {children}
    </Gridleft>
}

export const GridMiddle:FC<props> = ({children}) => {

    return<Gridmiddle className= 'middle'>
        {children}
    </Gridmiddle>
}

export const GridRight:FC<props> = ({children}) => {

    return<Gridright className= 'right'>
        {children}
    </Gridright>
}