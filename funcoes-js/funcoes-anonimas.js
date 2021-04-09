const soma = function(a, b){ //função anônima simples (sem nome)
    return a + b
}

//passando como 3º parâmetro um outra função, e setando como default a função soma
const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(10, 8) //chamando a função sem passar o 3º parâmetro (pegou o default)
imprimirResultado(20, 10, soma) //chamando a função passando o 3º parâmetro
imprimirResultado(100, 50, function(x, y){
    return x - y
}) //passando como 3º parâmetro uma outra função anônima criada na hora (posso passar qualquer função)


imprimirResultado('mauricio', 'gabriel', (nome, sobrenome) => nome + sobrenome) //passando uma arrow function

const pessoa = {
    falar: function(){ //função anônima passada como um atributo de um objeto
        console.log('Olá, mundo!')
    }
}

pessoa.falar()