function arredondar(v1, v2){
    return v1 + v2
}

console.log('R$ ' + arredondar(0.1, 0.2).toFixed(2).toString().replace('.', ','))
console.log('R$ ' + arredondar(100, 12).toFixed(2).toString().replace('.', ','))
console.log('R$ ' + arredondar(10, 4).toFixed(2).toString().replace('.', ','))
