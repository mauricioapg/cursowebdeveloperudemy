interface EntradaProps {
    texto: String
    tipo?: 'text' | 'number' | 'button'
    className?: String
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void //função como parâmetro
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col mb-6 ${props.className}`}>
            <label className={"mb-1"}>
                {props.texto}
            </label>
            <input
            onChange={e => props.valorMudou?.(e.target.value)} //evento que altera valor do campo
                type={`${props.tipo}`}
                value={`${props.valor}`}
                readOnly={props.somenteLeitura}
                className={`border-2 border-purple-500 bg-gray-100
                focus:outline-none py-2 text-gray-500 rounded-lg
                ${props.somenteLeitura ? 'border-opacity-20' : 'focus:bg-white'}`} />
        </div>
    )
}