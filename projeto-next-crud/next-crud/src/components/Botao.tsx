interface BotaoAcoesProps{
    children: any,
    onClick: any,
    className: String
}

export default function BotaoAcoes(props: BotaoAcoesProps){
    return(
        <button className={`${props.className}`}
        onClick={props.onClick}>
            {props.children}
        </button>
    )
}