//estratégia antiga para gerar valor padrão
function somar(v1, v2, v3) {
    v1 = v1 || 1 //1 representa o valor padrão, se nada for atribuído a variável
    v2 = v2 || 1
    v3 = v3 || 1
    return v1 + v2 + v3
}

console.log(somar()) //não passei nenhum valor para os parâmteros, então ele somou os valores padrões 1
console.log(somar(100)) //pasei somente o valor do 1º parâmetro

//-----------------------------------------------------------------------------------------------------------

//estratégia atual para gerar valor padrão
function somar2(v1 = 1, v2 = 1, v3 = 1) { //o valor padrão já é definido no próprio parâmetro
    return v1 + v2 + v3
}
console.log(somar2())
console.log(somar2(2, 50))
console.log(somar2(10, 25, 12))