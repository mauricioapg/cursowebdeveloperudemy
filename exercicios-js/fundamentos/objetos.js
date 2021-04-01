//DIFERENTES FORMAS DE SE CRIAR UM OBJETO

const produto1 = {} //cria um objeto vazio
produto1.nome = 'Computador Dell'
produto1.preco = 3499.90
produto1.cor = 'Preto'
console.log('Uma forma de criar Objeto')
console.log(produto1)

//--------------------------------------------------

const produto2 = {
    nome: 'Notebook Acer', //chave e valor
    preco: 2399.90, //chave e valor
    cor: 'branco', //chave e valor
    categoria: { //outro objeto dentro
        idCategoria: 1,
        nomeCategoria: 'Computadores/Notebooks'
    }
}    
console.log('Outra forma de criar Objeto')
console.log(produto2)
//--------------------------------------------------

//const 
