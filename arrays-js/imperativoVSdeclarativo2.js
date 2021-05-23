const alunos = [
    {nome: 'Mauricio', n1: 8.0, n2: 6.5},
    {nome: 'Luana', n1: 7.5, n2: 3.5},
    {nome: 'Lindsay', n1: 8.5, n2: 8.0},
    {nome: 'Leonardo', n1: 9.0, n2: 6.0},
    {nome: 'André', n1: 4.0, n2: 6.5},
    {nome: 'Caio', n1: 5.5, n2: 7.0}
]

//MÉDIA DE CADA ALUNO

//FORMA IMPERATIVA
let somaNotas = 0
let media = 0
for(let i=0; i < alunos.length; i++){
    somaNotas = alunos[i].n1 + alunos[i].n2
    media = somaNotas / 2
    console.log(`${alunos[i].nome}: ${media.toFixed(1)}`)
}


//FORMA DECLARATIVA (MAIS RECOMENDADA pois reaproveita mais as funções)
const getNotas = aluno => aluno.n1 + aluno.n2
const media2 = soma => (soma / 2).toFixed(1)
const resultado = alunos.map(getNotas).map(media2)
console.log(resultado)