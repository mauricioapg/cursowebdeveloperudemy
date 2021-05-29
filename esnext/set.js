//SET é um tipo de coleção que não aceita repetição e não é indexada
//parecido com um ArrayList em java, mas não aceita repetições

const timesPaulistas = new Set()
timesPaulistas.add('Palmeiras')
timesPaulistas.add('Corinthians').add('São Paulo').add('Santos')
console.log(timesPaulistas)

const times = ['Vasco', 'Flamengo','Botafogo', 'Fluminense']
const timesCariocas = new Set(times) //criou um SET a partir de um array
console.log(timesCariocas)