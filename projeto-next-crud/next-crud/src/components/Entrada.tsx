interface EntradaProps {
    texto: String
    tipo?: String
    className?: String
    valor: String
    somenteLeitura?: boolean
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={"flex flex-col mb-6"}>
            <label className={"mb-1"}>
                {props.texto}
            </label>
            <input
                type={`${props.tipo}`}
                value={`${props.valor}`}
                readOnly={props.somenteLeitura}
                className={`border-2 border-purple-500 bg-white
                focus:outline-none py-2 text-gray-500 rounded-lg
                ${props.somenteLeitura ? '' : 'focus:bg-gray-100'}`} />
        </div>
    )
}