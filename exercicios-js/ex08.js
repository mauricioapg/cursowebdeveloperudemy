let resultados = ['10', '20', '8', '4', '30', '3', '11', '40']

function analisarResultados() {
    let desempenho = []
    let recorde = 0
    let piorResultado = 0
    for (i = 0; i <= resultados.length; i++) {
        if (resultados[i] > Math.max(...resultados)) {
            recorde++            
        }     
    }
    piorResultado = Math.min(...resultados)
    desempenho.push(recorde)    
    desempenho.push(piorResultado)
    return desempenho
}

console.log(analisarResultados())