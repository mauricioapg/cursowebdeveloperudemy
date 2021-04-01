const valores = [10, 400, 12, 6, 8, 25]
valores[6] = 1000 //cria mais uma posição no Array e coloca o valor
valores[7] = 86 //cria mais uma posição no Array e coloca o valor
valores[2] = 2000000 // substitui valor na poisção

console.log(valores)

valores.push(false) //insere valor no final do array
valores.push('amor')

console.log(valores)

valores.pop() //remove valor do final do Array
console.log(valores)

delete valores[0] //remove valor da posição
console.log(valores)

console.log('Valor na posição: ' + valores[6]) //valor na posição
console.log('Valor na posição: ' + valores[2])
console.log(`Tamanho array: ${valores.length} posições`) //tamanho do array