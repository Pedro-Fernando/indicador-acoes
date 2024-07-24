import { IconChartArrowsVertical, IconHourglassFilled, IconSortAscending2Filled } from "@tabler/icons-react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuGrupo from "./MenuGrupo";
import MenuItem from "./MenuItem";

interface AreaLateralProps {

}

export default function AreaLateral(props: AreaLateralProps) {
    return (
        <div className="flex flex-col">
            <Logo />
            <Menu>
                <MenuGrupo label="Ações">
                    <MenuItem icone={<IconChartArrowsVertical />} label="Método Bazin" url="/valuation/method/bazin" />
                    <MenuItem icone={<IconSortAscending2Filled />} label="Método Graham" url="/valuation/method/graham" />
                </MenuGrupo>
                <MenuGrupo label="Fundos Imobiliários">
                    <MenuItem icone={<IconHourglassFilled />} label="Modelo Gordon" url="/valuation/method/graham" />
                </MenuGrupo>
            </Menu>
        </div>
    );
}