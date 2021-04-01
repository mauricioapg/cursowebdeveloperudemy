//Usando o '!!' duas vezes, verifica se o valor e true.
console.log('VERDADEIROS:') 
console.log(!!('mauricio'))
console.log(!!('1'))
console.log(!!(' '))
console.log(!!(12))
console.log(!!(10 + 8))
console.log(!!(0))
console.log(!!NaN)

//Usando o '!' uma vez, verifica se o valor e false.
console.log('FALSOS:') 
console.log(!('mauricio'))
console.log(!(' '))
console.log(!(0))
console.log(!(''))
console.log(!NaN)


//EXEMPLO PRÁTICO

let nome = ''
if(!!nome){ //se a variável nome é verdadeira
    console.log(nome)
}
else{
    console.log('O nome não é válido ou está vazio')
}