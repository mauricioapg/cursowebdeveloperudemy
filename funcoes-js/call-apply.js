global.preco = 3000

function getPreco(imposto = 0, tipoMoeda = 'R$'){
    let calc = this.preco * imposto
    return tipoMoeda + ' ' + (this.preco - calc)
}

const produto = {
    descricao: 'Computador Dell',
    preco: 1500,
    getPreco
}

console.log(getPreco(0.2)) //função chamada da forma comum
console.log(produto.getPreco(0.2)) //função chamada através de um objeto

//CALL E APPLY

const carro = {preco: 3000}

console.log(getPreco.call(carro, 0.2)) //função chamada via CALL
console.log(getPreco.apply(carro, [0.2])) //função chamada via APPLY