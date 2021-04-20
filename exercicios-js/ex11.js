function verificarAno(ano){
    base = 0
    let cont4 = base + 4
    let cont100 = base + 100
    let cont400 = base + 400
    if(ano == cont4){
        console.log('não é bissexto')
        base = cont4
    }
    else if((ano == (base += 4))){
        console.log('é ano bissexto')
    }
    else if((ano == (base += 400))){
        console.log('é ano bissexto')
    }
    console.log(cont4)
}

verificarAno(8)