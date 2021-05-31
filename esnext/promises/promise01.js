let valor = new Promise(function(resolve){
    resolve(['Mauricio', 'Lindsay', 'João', 'Maria'])
})

function primeiroNome(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

//executa uma série de funções, uma seguida da outra, onde o resultado vai sempre passando para a próxima
valor
    .then(primeiroNome) //recebeu o primeiro nome do Array
    .then(primeiraLetra) //recebeu a primeira letra do primeiro nome obtido
    .then(letraMinuscula) //transformou a primeira letra obtida em minúscula
    .then(imprimirLetra => console.log(imprimirLetra)) //imprime o resultado final da execução das promessas