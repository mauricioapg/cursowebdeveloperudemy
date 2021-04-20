//forma 1: literal

const pessoa = {
    nome: 'Mauricio',
    idade: 28,
    endereco: {
        logradouro: 'Rua Guarapuava',
        numero: '290',
        bairro: 'Mooca',
        cidade: 'São Paulo',
        uf: 'SP'
    },
    pais: {
        nomePais: 'Brasil',
        continente: 'América do Sul'
    }
}

//const nomeAlterado = pessoa.nome = 'João'

console.log(pessoa.nome)

console.log(`
${pessoa.endereco.logradouro}
${pessoa.endereco.numero}
`)

//-------------------------------------------------------------------
//forma 2: funções contrutoras

function produto(descricao, preco, desconto) {
    this.descricao = descricao
    this.preco = preco
    this.getCalculo = () => {
        return (preco / 100) * desconto
    }
}
console.log()

//----------------------------------------------------------------------

//forma 3: funções factory

function criarFuncionario(nome, salarioBruto, faltas, vt){
    return{
        nome,
        salarioBruto,
        faltas,
        vt,
        calcularSalarioLiquido(){
            let descontoVT = salarioBruto * vt 
            return ((salarioBruto / 30) * (30 - faltas)) - descontoVT
        }
    }
}

const f1 = criarFuncionario('Mauricio', 3395.94, 1, 0.06)
console.log(f1.calcularSalarioLiquido().toFixed(2))

//--------------------------------------------------------------------------

//forma 4: Object.create

const filha = Object.create(null)
filha.nome = 'Lindsay'
console.log(filha)