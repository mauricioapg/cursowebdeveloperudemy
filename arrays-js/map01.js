//MAP É UMA FORMA DE CRIAR UM NOVO ARRAY A PARTIR DE UM JÁ CRIADO

const numeros = [1, 2, 3, 4, 5, 6]

//mapeou o array numero s ecriou um novo, modificando os dados (i*2)
let arrayModificado = numeros.map(function(i){
    return i * 2
})

console.log(arrayModificado)

//-------------------------------------------------------------------------------------------------

//função callback
const converterMoeda = e => `${parseFloat(e).toFixed(2).replace('.', ',')}`

let valorConvertido = arrayModificado.map(converterMoeda)

console.log(valorConvertido)