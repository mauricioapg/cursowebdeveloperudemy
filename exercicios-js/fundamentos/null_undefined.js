let valor //não inicializada (undefined)
console.log(valor)

let valor1 = null //inicializada, porém vazia (null)
console.log(valor1)

const produto = {}
produto.preco = 120

if(!!produto.preco){
    console.log(produto.preco)
}
else{
    console.log('vazio')
    console.log(produto)
}