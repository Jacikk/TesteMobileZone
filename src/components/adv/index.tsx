import { FC } from "react";
import {AdContainer} from './styles'

interface props{
    imgUrl?:string
}

export const Adv:FC<props> =({imgUrl}) => {

    return <AdContainer style={{backgroundImage:`url(${imgUrl})`}}>
    </AdContainer>
}