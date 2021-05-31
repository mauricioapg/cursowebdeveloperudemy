//Exemplo de callbacks aninhadas

//simulando execuções assincronas através do setTimeout
/*setTimeout(function () {
    console.log('Executando callback...')

    setTimeout(function () {
        console.log('Executando callback...')

        setTimeout(function () {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)*/

//------------------------------------------------------------------------
//Exemplo de promises

function esperarPor(tempo){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve('Mauricio')
        }, tempo)
    })
}

let resultado = esperarPor(2000)
    .then(valor => console.log(valor))