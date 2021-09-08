
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const arrayClientes = [
    new Cliente('Mauricio', 29, '1'),
    new Cliente('Lindsay', 25, '2'),
    new Cliente('Mônica', 27, '3'),
    new Cliente('Marcelo', 34, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }

  return (
    <div className=
      {
        `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      `
      }>
      <Layout titulo="Cadastro de Clientes">
        <Tabela clientes={arrayClientes}
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
