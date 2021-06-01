function geraNumeroAleatorio(min, max){
    if(min > max){
        //inverto os valores
        [max, min] = min, max
    }

    //dentro do resolve eu coloco efetivamente o que eu quero que a função execute
    return new Promise(resolve => {
        const formulaAleatorio = Math.random() * (max - min + 1) + min
        const numeroAleatorio = parseInt(formulaAleatorio)
        resolve(numeroAleatorio) //precisa chamar o resolve
    })
}

function numeroPar(valor){
    if(valor % 2 == 0){
        console.log(valor + ' é par')
    }
    else{
        console.log(valor + ' é ímpar')
    }
    return valor
}

const numeroMaior = valor => {    
    if(valor > 50){
        console.log(`${valor} é maior que 50`)
    }
    else{
        console.log(`${valor} é menor que 50`)
    }
}

geraNumeroAleatorio(0, 100)
    .then(numeroPar)
    .then(numeroMaior)