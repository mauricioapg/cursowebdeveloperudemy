//Função sem retorno
function calcularLucro(despesasFixas, impostos, receitaBruta){
    console.log(receitaBruta - (despesasFixas + impostos))
}

//Função com retorno
function calcularImpostos(receitaBruta){
    return receitaBruta * 0.08
}

//chamada da função
calcularLucro(1100, calcularImpostos(3500), 3500)
calcularLucro(3500, 2) //se falta parâmetros, executa, porém dá NAN

//Função com valor padrão em um parâmetro
function somarValores(a=0, b=0){
    console.log(a + b)
}

somarValores()// se não passa nenhum parâmetro, ele assume os valores padrões definidos na função