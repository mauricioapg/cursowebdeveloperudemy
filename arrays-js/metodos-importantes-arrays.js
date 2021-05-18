jogadores = ['Weverton', 'Marcos Rocha', 'Luan', 'Gustavo Gomes', 'Matias Viña', 'Danilo', 'Patrick de Paula', 'Rafael Veiga', 'Rony', 'Willian', 'Luiz Adriano']
console.log(jogadores)

//remove o último
jogadores.pop(10)
console.log(jogadores)

//insere no final
jogadores.push('Breno Lopes')
console.log(jogadores)

//remove o primeiro
jogadores.shift()
console.log(jogadores)

//insere no início
jogadores.unshift('Jailson')
console.log(jogadores)

//adicionando no meio
jogadores.splice(4, 1, 'Victor Luis') //adicionar no índice 4 e remove 1 item
console.log(jogadores)

//removendo do meio
jogadores.splice(6, 2) //remove o índice 7 e apenas 1 elemento
console.log(jogadores)

//pegando um pedaço do array
const defesa = jogadores.slice(0, 5) //slice(inicio, fim)
console.log(defesa)

const ataque = jogadores.slice(6, 9) //slice(inicio, fim)
console.log(ataque)