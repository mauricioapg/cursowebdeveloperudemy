//É importante observar que o THIS em JS pode variar, de acordo com o contexto que ele tá sendo executado

function Pessoa(){
    this.idade = 0 //aqui o This está em um contexto (função Pessoa)

    setInterval(function(){
        this.idade++ //aqui o THIS está em outro contexto (função setInterval)
        console.log(this.idade)
    }.bind(this), 1000) //o método BIND amarra o this dentro do contexto principal (Pessoa)
}

function Pessoa2(){
    this.idade = 0

    //uma outra maneira seria colocar o this dentro de uma constante
    const self = this
    setInterval(function(){
        self.idade++
        console.log("Self: " + self.idade)
    }, 1000)
}

new Pessoa2