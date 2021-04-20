const sequencia = {
    _valor: 1, //por conveção, significa que é um atributo privado, acessando somente dentro do objeto
    get valor() { return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor) //get
sequencia.valor = 100 //set
console.log(sequencia.valor)
console.log(sequencia.valor)