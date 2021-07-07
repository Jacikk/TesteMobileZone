import { FC } from "react";
import { MenuContainer, MenuSection, MenuItem } from "./styles";

export const Menu: FC = () => {

    return <MenuContainer>

        <MenuSection>Gaming</MenuSection>
            <MenuItem>Consoles</MenuItem>
            <MenuItem>Computadores</MenuItem>

        <MenuSection>Simulação</MenuSection>
            <MenuItem>OculosVr</MenuItem>

        <MenuSection>Periféricos</MenuSection>
            <MenuItem>Câmeras</MenuItem>
            <MenuItem>Headsets</MenuItem>
            <MenuItem>Mouses</MenuItem>
            <MenuItem>Teclados</MenuItem>
    </MenuContainer>
}