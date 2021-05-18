const carrinho = [
    '{"item": "Camisa do Palmeiras", "preco": 149.90}',
    '{"item": "Blusa moletom da seleção brasileira", "preco": 89.90}',
    '{"item": "Jaqueta da seleção italiana", "preco": 249.90}',
    '{"item": "Calça da Puma", "preco": 78.90}',
    '{"item": "Tênis da Olympikus", "preco": 179.90}'
]

const converterParaObjeto = json => JSON.parse(json) //converteu array json para um array de objetos
const obterPreco = produto => produto.preco //obter somente o preçço dos objetos

const resultado = carrinho.map(converterParaObjeto).map(obterPreco) //criou outro array igual com o map, depois precorreu e criou outro somente com os preços
console.log(resultado)