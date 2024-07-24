interface MenuGrupoProps {
    label: string
    children: any
}

export default function MenuGrupo(props: MenuGrupoProps) {
    return (
        <div className={`p-3 mt-3`}>
            <span className={`font-bold text-sm text-zinc-300`}>{props.label}</span>
            {props.children}
        </div>
    );
}