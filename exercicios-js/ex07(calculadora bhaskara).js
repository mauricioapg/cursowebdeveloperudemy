//FÓRMULA DE BHASKARA

function calcularBhaskara(a, b, c){
    let delta = Math.pow(b, 2) - 4 * a * c
    let valoresX = []
    valoresX.push(((-b + Math.sqrt(delta)) / (2 * a)))
    valoresX.push(((-b - Math.sqrt(delta)) / (2 * a)))    
    return delta < 0 ? 'Delta é negativo' : `
    Delta = ${delta}
    ${valoresX}`
}

console.log(calcularBhaskara(3, -5, 12))