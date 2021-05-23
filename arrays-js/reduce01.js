const alunos = [
    {nome: 'Ricardo', nota: 7.2, bolsista: true},
    {nome: 'Luana', nota: 9.5, bolsista: false},
    {nome: 'Ana', nota: 6.0, bolsista: false},
    {nome: 'David', nota: 7.0, bolsista: true},
    {nome: 'Leonardo', nota: 4.5, bolsista: false},
]

//função reduce retorna sempre um acumulador e o valor atual do array

const bolsistas = alunos.map(a => a.nota).reduce(function(acumulador, valorAtual){
    console.log('acumulador: ' + acumulador, ' valor atual: ' + valorAtual)
    return acumulador + valorAtual
})