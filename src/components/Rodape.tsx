interface RodapeProps {

}

export default function Rodape(props: RodapeProps) {
    const versao = '1.0.0'

    return (
        <footer className={`
        flex justify-between items-center
        h-16  text-base px-10 bg bg-zinc-900
        text-zinc-500
        border-t border-zinc-800
        `}>
            <a href="https://www.gnu.org/licenses/gpl-3.0.html">© {new Date().getFullYear()} pflTech.</a>
            <span>Versão: {versao}</span>
        </footer>
    );
}