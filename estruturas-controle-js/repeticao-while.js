function gerarValor(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//console.log(gerarValor(2, 20))
let resultado = 0
while (resultado != -1) { //enquanto o valor não for null
    resultado = gerarValor(-1, 20)
    console.log(resultado)
}

//----------------------------------------------------------------------------------

let contador = 0
while(contador <= 10){
    console.log(`Contador: ${contador}`)
    contador ++
}