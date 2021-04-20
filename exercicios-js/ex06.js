function calcularJurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    let taxaConvertida = taxaJuros /100
    let calculoJuros = capitalInicial * taxaConvertida * tempoAplicacao
    return capitalInicial + calculoJuros
}

function calcularJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    let taxaConvertida = taxaJuros /100
    let calculoJuros = Math.pow(1 + taxaConvertida, tempoAplicacao)    
    return capitalInicial * calculoJuros
}

console.log('Total a juros simples: R$ ' + calcularJurosSimples(100, 1, 20)) //R$ 100,00 / 1% a.m / X meses
console.log('Total a juros composto: R$ ' + calcularJurosCompostos(100, 1, 20)) //R$ 100,00 / 1% a.m / X meses