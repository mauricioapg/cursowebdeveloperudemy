//OBSERVAÇÕES SOBRE O USO DA VARIÁVEL DECLARADA COMO VAR

var numero = 1200 //declarada no escopo global fica visível em todo o código
console.log(numero)

//qualquer outro escopo, exceto funções,também é considerado global para o VAR
var v1 = 1
{
    var v1 = 2
}

console.log(v1)

function somar(){
    valor = 10 + 20
}
console.log(valor) //não imprime porque não encontrou a variável. Ela está dentro do escopo da função
