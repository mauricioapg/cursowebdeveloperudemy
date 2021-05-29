//PROMISE é uma "promessa" de que algo vai executar de forma assíncrona (espera)

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Sociedade')
.then(frase => frase.concat(' Esportiva Palmeiras'))
.then(fraseCompleta => console.log(fraseCompleta))
.catch(e => console.log('erro'))