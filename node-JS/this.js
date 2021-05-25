console.log(this === global) // fora de uma função o this NÃO é igual a global
console.log(this === module)

// fora de uma função o this é igual a module.exports
console.log(this === exports)
console.log(this === module.exports)

//dentro de uma função o this NÃO é igual a module.exports
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === module.exports)
    console.log(this === global) // fora de uma função o this é igual a global
}

logThis()