interface ConteudoProps {
    children: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={
            `flex flex-col justify-start p-5
            bg-zinc-900 text-3xl 
            flex-1`
        }>
            {props.children}
        </div>
    );
}