import Entrada from "./Entrada"
import Botao from './Botao'
import Cliente from '../core/Cliente'
import { useState } from "react"

interface FormularioProps {
    cliente?: Cliente
    cancelar?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente.nome ?? '') //obtém o nome ou mantém valor padrão vazio
    const [idade, setIdade] = useState(props.cliente.idade ?? 0) //obtém o nome ou mantém valor padrão zero
    return (
        <div>
            {id ? (
                <Entrada
                    valor={id}
                    texto="ID"
                    somenteLeitura/>
            ) : false}
            <Entrada
                tipo="text"
                valor={nome}
                texto="Nome"
                valorMudou={setNome}/>
            <Entrada
                tipo="number"
                valor={idade}
                texto="Idade"
                valorMudou={setIdade}/>
            <div className={'flex justify-end'}>
                <Botao className={`bg-gradient-to-tr from-blue-800 to-blue-600
            rounded-lg py-2 px-4 text-white`}
                    onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ?
                        'Editar'
                        : 'Salvar'}
                </Botao>
                <Botao className={`bg-gradient-to-tr from-gray-800 to-gray-600
            rounded-lg py-2 px-4 text-white ml-2`}
                    onClick={props.cancelar}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}