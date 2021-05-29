//operador ... rest(juntar)/spread(espalhar)

//SPREAD em objeto
const pessoa = {nome: 'Mauricio', idade: 29}
const clone = {profissao: 'Desenvolvedor', ...pessoa}
console.log(clone)

//SPREAD em array
const eletrodomesticos = ['geladeira', 'fogão', 'microondas', 'forno elético']
const clone2 = ['freezer', 'máquina de lavar', ...eletrodomesticos]
console.log(clone2)

//-------------------------------------------------------------------------------

//REST
function times(nome, ...valores){
    console.log(nome, valores)
}
times('Palmeiras', 'Corinthians', 'São Paulo', 'Santos')