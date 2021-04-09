//O arguments representa um array interno com todos os elementos da função
function somar (){
    let resultado = 0
    for(let i in arguments){
        resultado = resultado + arguments[i]
    }
    return resultado
}

/*
Aqui eu passei parâmetros, embora não tenha pedido na função, porém ele pegou como parâmetro
todos os elementos contidos em arguments
*/
console.log(somar(50, 2, 10))