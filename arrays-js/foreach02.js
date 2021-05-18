//SIMULANDO FOREACH COM OBJETO

const paises = ['Brasil', 'Alemanha', 'Uruguai', 'Argentina', 'Chile', 'Itália', 'Israel', 'Espanha', 'Japão']

Array.prototype.forEach2 = function(callback){
    for(let i=0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

paises.forEach2(function (nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})