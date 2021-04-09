class Pessoa{
    constructor(nome, idade, RG){
        this.nome = nome
        this.idade = idade
        this.RG = RG
    }

    falar = () => {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos de idade, e meu RG é ${this.RG}`)
    }
}

const user = new Pessoa('Mauricio', 29, 481615441) //os parâmetros do método construtor
user.falar()

const user2 = new Pessoa('Pelé', 89, 3784794950)
user2.falar()