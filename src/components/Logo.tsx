import { IconBrandCashapp } from "@tabler/icons-react";
import Link from "next/link";
import Titulo from "./Titulo";

interface LogoProps {

}

export default function Logo(props: LogoProps) {
    return (
        <Link href="/" className="flex justify-center items-center">
            <div className="flex p-12 items-center gap-2 font-black h-16 text-yellow-500">
                <span><IconBrandCashapp size={35} stroke={2} /></span>
                <Titulo gradiente principal="Valuation"></Titulo>
            </div>
        </Link>
    )
}