export default function BotaoAcoes(props){
    return(
        <button className={props.estilo}
        onClick={props.acao}>
            {props.children}
        </button>
    )
}