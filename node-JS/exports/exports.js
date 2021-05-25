//formas de exportar

module.exports.nome = 'Mauricio'

module.exports.idade = 29

exports.estadoCivil = 'casado'

//Esse sobrepões os outros module.exports
module.exports = {
    cpf: '40187785899',
    rendaMensal: function(salario, despesas){
        return salario - despesas
    }
}