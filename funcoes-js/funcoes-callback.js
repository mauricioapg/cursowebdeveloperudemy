const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Exemplo de varredura SEM CALLBACK
const notasBaixas1 = []

for (var i = 0; i < notas.length; i++) {
    if (i + 1 < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(`Sem CallBack: ${notasBaixas1}`)

//--------------------------------------------------------------

//Exemplo de varredura COM CALLBACK
const notasBaixas2 = notas.filter((nota) => nota < 7) //a própria função filter faz a varredura

console.log(`Com CallBack: ${notasBaixas2}`)