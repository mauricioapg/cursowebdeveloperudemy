const gerarID = {
    _id: 1,
    get id(){
        this._id = Math.floor(Math.random() * 100)
        return this._id
    }
}

//Math.floor(Math.random() * 100)

const pessoas = {}

function salvarPessoa(pessoa){
    if(!pessoa.id){
        pessoa.id = gerarID.id
        pessoas[pessoa.id] = pessoa
        return pessoa
    }
}

function getPessoa(id){
    return pessoas[id] || {}
}

function getPessoas(){
    return Object.values(pessoas)
}

function excluirPessoa(id){
    const pessoa = pessoas[id]
    delete pessoas[id]
    return pessoa
}

module.exports = {salvarPessoa, getPessoa, getPessoas, excluirPessoa}