interface MenuProps {
    children: any
}

export default function Menu(props: MenuProps) {
    return (
        <div className={`bg-black w-72 h-screen`}>
            {props.children}
        </div>
    );
}