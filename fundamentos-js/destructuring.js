/*
OPERADOR DESTRUCTURING EXTRAI UM VALOR DE DENTRO DE UM OBJETO, SENDO POSSÍVEL ACESSÁ-LO FORA DO OBJETO.
*/

const carro = {
    modelo: 'Astra',
    cor: 'vermelho',
    ano: 1994,
    fabricante: {
        nome: 'Chevrolet',
        pais: 'França'
    }
}
//console.log(carro)

carro.ano = 2000
carro.cor = 'azul'

const {ano, cor} = carro //const{} representa o operador destructuring

console.log(ano, cor)
console.log(carro.ano, carro.cor)