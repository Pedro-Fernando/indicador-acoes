import AreaLateral from "./AreaLateral";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <AreaLateral />
            <div className="flex flex-col flex-1 bg-red-200">
                <Conteudo >
                    {props.children}
                </Conteudo>
                <Rodape />
            </div>
        </div>
    );
}