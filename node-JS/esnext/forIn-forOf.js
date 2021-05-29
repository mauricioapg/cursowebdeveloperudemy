//ForOf: laço que percorre em cima dos valores, e não dos índices
//ForIn: laço que percorre em cima dos índices

//ForIN
const nomes = ['Maria', 'João', 'Carlos', 'José']
for (let i in nomes) {
    console.log(i)
    //console.log(nomes[i])
}

//ForOF
const frutas = ['Maçã', 'Abacaxi', 'Banana', 'Laranja']
for (let i of frutas) {
    console.log(i)
}

//ForOF em cima de um Map
const cores = new Map([
    ['azul', { primaria: true }],
    ['amarelo', { primaria: true }],
    ['roxa', {primaria: false}]
])

//pegando as chaves
for(let i of cores.keys()){
    console.log(i)
}

//pegando os valores
for(let i of cores.values()){
    console.log(i)
}
