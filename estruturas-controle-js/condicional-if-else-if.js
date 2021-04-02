// ESTRUTURA IF ELSE
function imprimirSumula(timeA, timeB){
    if (timeA && timeB) {
        console.log(`Houve um jogo entre ${timeA} vs ${timeB}`)
    }
    else if(timeA || timeB)
    {
        console.log(`Não houve jogo pois um dos times não compareceram`)
    }
    else{
        console.log('Não foi possível ter jogo')
    }
}
imprimirSumula('Palmeiras', 'Corinthians')