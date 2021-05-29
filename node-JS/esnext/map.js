//MAP com chave e valor
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
console.log(tecnologias.get('angular'))

const obj = {
    nome: 'Mauricio'
}

//MAP com chaves de vários tipos
const chavesVariadas = new Map([
    [function(){ }, 'função como chave'],
    [{}, 'objeto como chave'],
    [123, 'numero como chave']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) //verifica se há este elemento dentro do array
chavesVariadas.delete(123) //delete de dentro do array
console.log(chavesVariadas.has(123))