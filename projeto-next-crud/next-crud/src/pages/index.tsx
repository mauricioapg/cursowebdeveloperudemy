
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import BotaoNovoCliente from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'

export default function Home() {

  //Toda a lógica implementada no hooks useClientes está sendo importada aqui
  const { 
    tabelaVisivel,
    cliente,
    clientes,
    exibirTabela,
    adicionarCliente,
    selecionarCliente,
    salvarCliente,
    excluirCliente,
   } = useClientes()

  return (
    <div className=
      {
        `flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      `
      }>
      <Layout titulo="Cadastro de Clientes">
        {
          tabelaVisivel ?
            (
              <>
                <div className={"flex justify-end"}>
                  <BotaoNovoCliente className={`bg-gradient-to-r from-green-700 to-green-600
        px-4 py-2 rounded-lg text-white my-2`}
                    onClick={adicionarCliente}>
                    Novo Cliente
                  </BotaoNovoCliente>
                </div>
                <Tabela clientes={clientes}
                  clienteSelecionado={selecionarCliente}
                  clienteExcluido={excluirCliente} />
              </>
            ) : (
              <Formulario cliente={cliente}
              cancelar={() => exibirTabela()}
              clienteMudou={salvarCliente} />
            )
        }
      </Layout>
    </div>
  )
}
