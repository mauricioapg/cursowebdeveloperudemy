const Jogador = {
    nome: 'Neymar Jr',
    idade: 29,
    clube: 'Paris Saint Germain',
    gols: 14
}

console.log(Object.keys(Jogador)) //exibe as chaves do objeto
console.log(Object.values(Jogador)) //exibe os valores do objeto
console.log(Object.entries(Jogador)) //exibe as chaves e os valores do objeto

Object.defineProperty(Jogador, 'gols', { //define coisas na propriedade do atributo
    enumerable: true, //atributo visivel
    writable: false //atributo não permite escrita
})

Jogador.gols = 28 //(não permitiu escrita)
console.log(Object.entries(Jogador))


//Object.assign
const VeiculoVenda = {id: 1}
const Modelo = {descricao: 'Astra'}
const Montadora = {nome: 'Ford'}
const Cor = {cor: 'Preto'}
const Carro = Object.assign(VeiculoVenda, Modelo, Montadora, Cor) //concatenou os objetos

console.log(Carro);

//Object.freeze
Object.freeze(Carro) //congela o objeto e não permite que seja mais alterado
Carro.cor = 'Branco'

console.log(Carro)