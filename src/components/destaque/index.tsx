import { FC } from "react";
import { DestatqueContainer, Faixa} from "./styles";

interface props{
    imgUrl?:string,
    content?:string
}
export const Destaque:FC<props> = ({imgUrl, content='IMPERDIVEL'}) => {

    return <DestatqueContainer style={{backgroundImage:`url(${imgUrl})`}}>
        <Faixa>{content}</Faixa>
    </DestatqueContainer>
}