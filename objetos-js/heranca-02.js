const chefeFinanceiro = {
    chefe: 'Márcio',
    departamento: 'Financeiro'
}

//Object.Create cria um objeto baseado no protótipo (por herança)
const funcionario1 = Object.create(chefeFinanceiro, {
    nome: {
        value: 'Josias',
        idade: 32
    }
})
funcionario1.estadoCivil = 'solteiro'
//console.log(funcionario1.chefe)
//console.log(funcionario1.nome)

for(let key in funcionario1){
    funcionario1.hasOwnProperty(key) ? //verifica os atributos que são herdados e os que não são
    console.log(key) : console.log('Por herança: ' + key)
}