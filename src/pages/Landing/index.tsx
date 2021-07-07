import { FC } from "react";
import { GridContainer } from "../../components/grid/styles";
import { GridLeft, GridMiddle, GridRight } from '../../components/grid'
import { Adv } from '../../components/adv'
import { Menu } from '../../components/menu';
import { Destaque } from '../../components/destaque';
import { Title, Title2, Title3 } from '../../components/Texts/Styles';
import { CardSection } from '../../components/card/styles';
import { Card } from '../../components/card';

import VrShooter from '../../assets/VrShooter.jpg'
import Controles from '../../assets/controles.jpg'
import Iphone from '../../assets/iphone.jpg'
import simuladorDeBarco from '../../assets/SimuladorDeBarco.jpg'
import TecladoGamer from '../../assets/tecladoGamer.jpg'
import Vr from '../../assets/Vr.jpg'
import Velas from '../../assets/velasAromaticas.jpg'
import TecladoGamer2 from '../../assets/tecladoGamer2.jpg'

export const LandingPage: FC = () => {
    return <GridContainer>
        <GridLeft>
            <Title3 className='withMargin'>Busque pela categoria</Title3>
            <Menu />
        </GridLeft>

        <GridMiddle>
            <Title>Destaques</Title>
            <Destaque imgUrl={VrShooter} content='15% OFF' />
            <Destaque imgUrl={TecladoGamer} content='25% OFF' />
            <Destaque imgUrl={Controles} />

            <Title>Você vai gostar</Title>
            <CardSection>
                <Card discount='10% OFF' imgUrl={VrShooter} />
                <Card discount='10% OFF' imgUrl={Controles} />
                <Card discount='10% OFF' imgUrl={TecladoGamer} />
                <Card discount='10% OFF' imgUrl={TecladoGamer2} />
                <Card discount='10% OFF' imgUrl={Vr} />
                <Card discount='10% OFF' imgUrl={Velas} />
            </CardSection>
        </GridMiddle>

        <GridRight>
            <Title2 className='withMargin'>Parceiros</Title2>
            <Adv imgUrl={simuladorDeBarco} />
            <Adv imgUrl={Iphone} />
        </GridRight>
    </GridContainer>
}
