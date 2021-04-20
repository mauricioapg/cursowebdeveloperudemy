const Carro = {
    categoria: 'carro antigo',
    precoBase: 10000,
    status(ano) {
        if (ano >= 2000) {
            this.categoria = 'carro novo'
        }
        return `Categoria: ${this.categoria} Valor: ${this.precoBase}`
    }
}

const ferrari = {
    nome: 'Ferrari',
    modelo: 'F2021',
    status() {
        return super.status(2016) //usei o valor definido no protótipo (não sobrescreveu)
    }
}

const volvo = {
    nome: 'Volvo',
    modelo: 'V1000',
    precoBase: 6000 //sobrescreveu o valor definido no protótipo
}

const corsa = {
    nome: 'Corsa',
    modelo: '2000',
    precoBase: 5500,
    __proto__: Carro //outro modo de definir o protótipo de um objeto
}

console.log(ferrari.__proto__) //forma de acessar um protótipo do objeto (se houver)
console.log(volvo.__proto__) //forma de acessar um protótipo do objeto (se houver)

console.log(ferrari.__proto__ === Object.prototype) //se não for definido um protótipo, por padrão, ele assume um Object.prototype

Object.setPrototypeOf(ferrari, Carro) //define o Carro como protótipo de Ferrari, herdando seus atributos (herança)
Object.setPrototypeOf(volvo, Carro)

console.log(ferrari.nome, ferrari.modelo, ferrari.status(2016))
console.log(volvo.nome, volvo.modelo, volvo.status(1978))
console.log(corsa.nome, corsa.modelo, corsa.status(2000))

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Exemplo simples de herança
console.log('-------------------------------------------------------------------------------------------------------------')

const bisavo = {atributoA: 'bisavô'} //herdou do objeto padrão (Objective.protype = null)
const avo = {atributoB: 'avô', __proto__: bisavo} //herdou de bisavô
const pai = {atributoC: 'pai', __proto__: avo} //herdou de avô
const filho = {atributoD: 'filho', __proto__: pai} //herdou de pai
console.log(`${filho.atributoD} - ${filho.atributoC} - ${filho.atributoB} - ${filho.atributoA} - ${filho.atributoZ}`)
console.log(pai.atributoB)