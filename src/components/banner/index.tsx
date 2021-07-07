import { FC } from "react";
import { BannerContainer, Faixa } from "./styles";

interface bannerContent {
    imgUrl:string,
    content?:string
}
export const Banner: FC<bannerContent> = ({imgUrl, content}) => {

    return <BannerContainer style={{backgroundImage:`url(${imgUrl})`}}>
        <Faixa>{content}</Faixa>
    </BannerContainer>
}