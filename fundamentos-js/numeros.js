//Uma forma de criar variáveis numéricas:
const notaA = 5.6

//Outro forma de criar variáveis numéricas:
const notaB = Number("8.7")

const media = (notaA + notaB) / 2

console.log('Nota A:' + notaA, '\nNota B: ' + notaB)
console.log(typeof notaA, typeof notaB) //imprime os tipos
console.log('Média: ' + media)
console.log('Média arredondada: ' + media.toFixed(2))

let valor = Math.random() * 20
console.log(valor)