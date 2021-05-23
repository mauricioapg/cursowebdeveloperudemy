const alunos = [
    {nome: 'Mauricio', nota: 8.0},
    {nome: 'Luana', nota: 7.0},
    {nome: 'Lindsay', nota: 8.5},
    {nome: 'Leonardo', nota: 6.0},
    {nome: 'André', nota: 4.5},
    {nome: 'Caio', nota: 5.5}
]

//MÉDIA DE TODOS OS ALUNOS

//FORMA IMPERATIVA
let somaNotas = 0
let media = 0
for(let i=0; i < alunos.length; i++){
    somaNotas += alunos[i].nota
}
media = somaNotas / alunos.length
console.log(media.toFixed(1))


//FORMA DECLARATIVA (MAIS RECOMENDADA pois reaproveita mais as funções)
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total = alunos.map(getNota).reduce(soma)
let media2 = total / alunos.length
console.log(media2.toFixed(1))