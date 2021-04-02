//Armazenando uma função em uma variável
const media = function (n1, n2, n3){
    return(n1 + n2 + n3) /3
}

console.log(`Média: ${media(10, 2.5, 5.5)}`)


//Armazenando uma função arrow em uma variável
const resultado = (a, b) => {
    return a * b
}

console.log('Resultado multiplicação: ' + resultado(9, 3))

//Função com retorno implícito
const subtracao = (a, b, c) => a - b - c //o retorno é implícito, sem precisar de um corpo da função

console.log('Resultado subtração: ' + subtracao(55, 20, 10))