import Menu from "@/components/Menu";
import Pagina from "@/components/Pagina";
import Titulo from "@/components/Titulo";
import { IconBrandCashapp } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex">
      <Pagina>
        <div className="flex text-yellow-500 w-full items-center ">
          <IconBrandCashapp  size={50} />
          <Titulo gradiente  principal="Valuation"></Titulo>
        </div>
      </Pagina>
    </div>
  );
}
