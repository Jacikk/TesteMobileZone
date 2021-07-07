import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { Banner } from "../../components/banner";



export const BannerDinamico: FC = () => {
    const data = useAppSelector(state => state)
    return <Banner imgUrl={data.imgUrl} content={data.content}/>
}