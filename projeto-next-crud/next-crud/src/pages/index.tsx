
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import BotaoNovoCliente from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.Vazio)
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela') //exibe a tabela ou o form

  const arrayClientes = [
    new Cliente('Mauricio', 29, '1'),
    new Cliente('Lindsay', 25, '2'),
    new Cliente('Mônica', 27, '3'),
    new Cliente('Marcelo', 34, '4')
  ]

  function novoCliente() {
    setCliente(Cliente.Vazio)
    setVisivel('formulario')
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('formulario')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className=
      {
        `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      `
      }>
      <Layout titulo="Cadastro de Clientes">
        {
          visivel === 'tabela' ?
            (
              <>
                <div className={"flex justify-end"}>
                  <BotaoNovoCliente className={`bg-gradient-to-r from-green-700 to-green-600
        px-4 py-2 rounded-lg text-white my-2`}
                    onClick={novoCliente}>
                    Novo Cliente
                  </BotaoNovoCliente>
                </div>
                <Tabela clientes={arrayClientes}
                  clienteSelecionado={clienteSelecionado}
                  clienteExcluido={clienteExcluido} />
              </>
            ) : (
              <Formulario cliente={cliente}
              cancelar={() => setVisivel('tabela')}
              clienteMudou={salvarCliente} />
            )
        }
      </Layout>
    </div>
  )
}
