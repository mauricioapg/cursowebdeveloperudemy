const pasteis = [
    {descricao: 'Pastel de frango', preco: 7.99, molhoExtra: true},  
    {descricao: 'Pastel de carne', preco: 7.99, molhoExtra: false},
    {descricao: 'Pastel de frango c/ catupiry', preco: 10.99, molhoExtra: true},
    {descricao: 'Pastel de palmito', preco: 10.99, molhoExtra: true},
    {descricao: 'Pastel de especial', preco: 14.99, molhoExtra: false},  
]

//retorna as informações filtradas do array (transforma num array menor)
/*console.log(pasteis.filter(function(p){
    return p.preco > 10
}))*/

const pasteisBaratos = pasteis => pasteis.preco < 10
const pasteisComMolhoExtra = pasteis => pasteis.molhoExtra

console.log(pasteis.filter(pasteisBaratos).filter(pasteisComMolhoExtra))