import Cliente from '../core/Cliente'
import BotaoAcoes from './Botao'
import { IconeEdicao, IconeLixeira } from './Icones'

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const ExibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderizarCabecalho() {
        return (
            <tr>
                <th className={'text-left p-4'}>ID</th>
                <th className={'text-left p-4'}>Nome</th>
                <th className={'text-left p-4'}>Idade</th>
                {ExibirAcoes ?
                    <th className={'text-center p-4'}>Ações</th>
                    : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => { //percorre o array de clientes
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={'text-left p-4'}>{cliente.id}</td>
                    <td className={'text-left p-4'}>{cliente.nome}</td>
                    <td className={'text-left p-4'}>{cliente.idade}</td>
                    {ExibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ?
                    <BotaoAcoes className={`
                flex justify-center items-center
                text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `}
                        acao={() => props.clienteSelecionado(cliente)}>
                        {IconeEdicao}
                    </BotaoAcoes>
                    : false}
                {props.clienteExcluido ?
                    <BotaoAcoes className={`
                flex justify-center items-center
                text-red-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `}
                        acao={() => props.clienteExcluido(cliente)}>
                        {IconeEdicao}
                    </BotaoAcoes>
                    : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}