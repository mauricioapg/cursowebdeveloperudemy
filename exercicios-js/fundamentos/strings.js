const clube = 'Sociedade Esportiva Palmeiras'
const fundacao = 1914

console.log(clube)
console.log('Letra na posição: ' + clube.charAt(6)) //letra a posição 6 da frase
console.log('Valor unicode: ' + clube.charCodeAt(6)) //valor da letra na tabela unicode
console.log('Posição valor: ' + clube.indexOf('p')) //retorna a posição de um valor
console.log('Substring: ' + clube.substring(6, 9)) //pedaços da string
console.log('O clube '.concat(clube) + ' foi fundado no ano de '.concat(fundacao).concat('.')) //concatenação
console.log(clube.replace('S', 's')) //substitui valor
console.log('Maiúsculas: ' + clube.toUpperCase()) //converte todas e maiúsculas
console.log('Minúsculas: ' + clube.toLowerCase()) //converte todas e minúsculas

//converte as palavras separadas por vírgulas em um array
console.log('Palmeiras, Corinthians, São Paulo, Santos'.split(','))

//TEMPLATE STRING
const template = `
No ano de ${fundacao} foi fundada a ${clube}.
Em 1999, a ${clube} foi campeã da Taça Libertadores da América pela 1ª vez.
Em 2020, foi campeã deste mesmo torneio pela 2ª vez.`

console.log(template)