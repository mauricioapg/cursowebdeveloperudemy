//Exemplos de funções ARROW

let somar = (num) => {
    this.calc = 2 + num
    console.log('Forma padrão: ' + this.calc)
}

const multiplicar = (num) => 3 * num //forma contraída (em uma única linha, sem o corpo da função)
console.log('Forma contraída: ' + multiplicar(6))

somar(4)

//----------------------------------------
console.log('THIS em Arrow Function, não varia independente do contexto. O que vale é o contexto principal')

function Pessoa(){
    this.idade = 0

    setInterval(() => { //ARROW FUNCTION
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
