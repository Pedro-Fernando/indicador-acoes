interface TituloProps {
    principal: string
    gradiente?: boolean
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col items-start">
            <h1 className={`
                text-4xl font-black
                ${props.gradiente ? 'bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent' : ''}
            `}>
                {props.principal}
            </h1>
        </div>
    )
}