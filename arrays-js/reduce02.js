const alunos = [
    {nome: 'Ricardo', nota: 7.2, bolsista: false},
    {nome: 'Luana', nota: 9.5, bolsista: false},
    {nome: 'Ana', nota: 6.0, bolsista: false},
    {nome: 'David', nota: 7.0, bolsista: false},
    {nome: 'Leonardo', nota: 4.5, bolsista: true},
]

//1 - Todos os alunos são bolsistas?

// && verifica se o acumulador e o bolsista são estritamenteo verdadeiros
const todosBolsistas = (acumulador, bolsista) => acumulador && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//2 - Algum aluno é bolsista?
const alunosBolsistas = (acumulador, bolsista) => acumulador || bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsistas))