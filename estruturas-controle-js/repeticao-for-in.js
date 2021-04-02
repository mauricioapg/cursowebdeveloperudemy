const pessoa = {
    nome: 'Lindsay',
    idade: 24,
    genero: 'Feminino'
}

for (let item in pessoa) {
    console.log(`${item}: ${pessoa[item]}`)
}