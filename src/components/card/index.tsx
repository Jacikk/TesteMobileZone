import { FC } from "react";
import {CardContainer} from './styles.js'

interface Props {
    discount:string,
    imgUrl:string
}

export const Card: FC<Props> = ({discount,imgUrl}) => {

    return <CardContainer style={{backgroundImage:`url(${imgUrl})`}}>
        <div className='faixaDePreco direita' >{discount}</div>
    </CardContainer>
}