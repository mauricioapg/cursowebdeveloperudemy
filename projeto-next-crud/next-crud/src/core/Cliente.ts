export default class Cliente{
    // símbolo # representa atributo privado
    #id: string
    #nome: string
    #idade: Number

    constructor (nome: string, idade: Number, id: string = null){
        this.#id = id
        this.#nome = nome
        this.#idade = idade
    }

    //construtor vazio
    static Vazio(){
        return new Cliente('', 0)        
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get idade(){
        return this.#idade
    }

}