//OBSERVAÇÕES SOBRE O USO DA VARIÁVEL DECLARADA COMO LET

let numero = 10 //declarada no escopo global
{
    let numero = 20 //declarada dentro de um bloco
    console.log('dentro: ' + numero)
}
console.log('fora: ' + numero)

//Sendo variável do tipo LET, ele identifica em qual escopo ela está e diferencia