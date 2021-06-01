//GERAR SIMULADOR NÚMEROS MEGA-SENA
//Executar várias promises de uma vez e exibir os resultados das execuções

function gerarNumeroAleatorio(min, max, tempo) {
    if (min > max) {
        //inverto os valores
        [max, min] = min, max
    }

    //dentro do resolve eu coloco efetivamente o que eu quero que a função execute
    return new Promise(resolve => {
        setTimeout(() => {
            const formulaAleatorio = Math.random() * (max - min + 1) + min
            const numeroAleatorio = parseInt(formulaAleatorio)
            resolve(numeroAleatorio)
        }, tempo)
    })
}

const gerarNumerosMegaSena = () => {
    return Promise.all([
        gerarNumeroAleatorio(1, 60, 2000),
        gerarNumeroAleatorio(1, 60, 2000),
        gerarNumeroAleatorio(1, 60, 2000),
        gerarNumeroAleatorio(1, 60, 2000),
        gerarNumeroAleatorio(1, 60, 2000),
        gerarNumeroAleatorio(1, 60, 2000)
    ])
}

gerarNumerosMegaSena()
    .then(sequenciaPremiada => console.log(sequenciaPremiada))