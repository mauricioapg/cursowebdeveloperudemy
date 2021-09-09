interface BotaoAcoesProps{
    children: any,
    acao: any,
    className: String
}

export default function BotaoAcoes(props: BotaoAcoesProps){
    return(
        <button className={`${props.className}`}
        onClick={props.acao}>
            {props.children}
        </button>
    )
}