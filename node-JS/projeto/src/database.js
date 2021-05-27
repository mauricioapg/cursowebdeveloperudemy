//cria a sequência de IDs
const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}

//cria a coleção de  produtos
const produtos = {}

function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequence.id
        produtos[produto.id] = produto
        return produto
    }
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto, getProdutos}