const aprovados = ['Joana', 'Carlos', 'Érick', 'Ronaldo', 'Ana', 'Mariana', 'Davi', 'Bruna']

//arrow function chamada dentro do foreach
aprovados.forEach(element => {
    console.log(element)
});

//função callback chamada dentro do foreach
aprovados.forEach(function (nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

const exibirAprovados = (nome, indice) => console.log(indice + 1 + ")" + nome)
aprovados.forEach(exibirAprovados)