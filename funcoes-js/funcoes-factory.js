//SÃO FUNÇÕES QUE RETORNAM OBJETOS

function criarProduto(){
    return {
        descricao: 'Notebook Dell',
        preco: 1599.90,
        garantia: '2 anos'
    }
}
console.log('Exemplo 1:')
console.log(criarProduto())

//-----------------------------------------------------------------

function criarPessoa(parametroNome, anoNascimento, parametroProfissao){
    function definirData(){
        let data = new Date()
        return data.getFullYear() - anoNascimento
    }
    return {
        nome: parametroNome,
        idade: definirData(),
        profissao: parametroProfissao
    }
}
console.log('Exemplo 2:')
console.log(criarPessoa('Lindsay', 1996, 'Instrumentadora Cirúrgica'))

//-----------------------------------------------------------------------------

function criarFuncionario(parametroNome, parametroSalarioBruto, parametroCargo){
    function calcularSalarioLiquido(){
        let desconto = parametroSalarioBruto * 0.20
        return parametroSalarioBruto - desconto
    }
    return {
        nome: parametroNome,
        salarioLiquido: calcularSalarioLiquido(),
        cargo: parametroCargo
    }
}
console.log('Exemplo 3:')
console.log(criarFuncionario('Marcelo', 4350, 'Assistente Financeiro'))

//-----------------------------------------------------------------------------
//FUNÇÃO FACTORY USANDO ARROW FUNCTION
const criarOS = () => {
    return{
        Descrição: 'Serviço de reparo de produto com defeito'
    }
}
console.log('Exemplo 4:')
console.log(criarOS())