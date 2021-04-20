function calcularTriangulo(ladoA, ladoB, ladoC){
    if(ladoA == ladoB && ladoB == ladoC){
        console.log('Triângulo Equilátero')
    }
    else if(ladoA == ladoB && ladoB != ladoC
        || ladoA == ladoC && ladoC != ladoB
        || ladoB == ladoC && ladoC != ladoA){
            console.log('Triângulo Isósceles')
    }
    else if(ladoA != ladoB && ladoB != ladoC){
        console.log('Triângulo Escaleno')
    }
}

calcularTriangulo(10, 20, 30)