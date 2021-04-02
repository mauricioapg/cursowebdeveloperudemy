function gerarValor(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//console.log(gerarValor(2, 20))
let resultado = -1
do { //executa pelo menos uma vez
    resultado = gerarValor(-1, 20)
    console.log(resultado)
}
while (resultado != -1)