import { useEffect, useState } from "react"
import ColecaoCLiente from "../backend/db/ColecaoClientes"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import UseTabelaOuFormulario from "./useTabelaOuFormulario"

export default function useClientes(){
  
  const repositorio: ClienteRepositorio = new ColecaoCLiente()

  //Toda a lógica implementada no hooks useTabelaOuFormulario está sendo importada aqui
  const { 
    tabelaVisivel,
    exibirFormulario,
    exibirTabela
   } = UseTabelaOuFormulario()

  const [clientes, setClientes] = useState<Cliente[]>([])
  const [cliente, setCliente] = useState<Cliente>(Cliente.Vazio)

  useEffect(obterTodos, []) //obtém tudo na inicialização da página (use effect)

  function obterTodos(){
    repositorio.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function adicionarCliente() {
    setCliente(Cliente.Vazio)
    exibirFormulario()
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente) {
    await repositorio.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repositorio.salvar(cliente)
    obterTodos()
  }

  return{
      cliente,
      clientes,
      tabelaVisivel,
      exibirTabela,
      adicionarCliente,
      salvarCliente,
      excluirCliente,
      selecionarCliente,
      obterTodos
  }
}