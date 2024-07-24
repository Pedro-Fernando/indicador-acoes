import Link from "next/link"

interface MenuItemProps {
    label: string
    url: string
    icone: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url}
            className={`
            flex gap-2
            text-base w-full
            rounded-md items-center
            px-1 py-2
            hover:bg-zinc-900
            hover:text-green-500
        `}>
            <span>
                {props.icone}
            </span>
            <span className="">
                {props.label}
            </span>
        </Link >
    )
}