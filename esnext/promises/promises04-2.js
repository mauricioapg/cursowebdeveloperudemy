let receita = 0

const calcularReceitas = (...valores) => {
    const fontesRenda = valores

    return new Promise((resolve, reject) => {
        let receitaTotal = 0
        for (let i of fontesRenda) {
            receitaTotal += i
        }
        if (valores.length == 0) {
            reject('Informe suas receitas')
        }
        else {
            resolve(receitaTotal)
            receita = receitaTotal
        }
    })
}

const calcularDespesas = (...valores) => {
    const custos = valores

    return new Promise((resolve, reject) => {
        let despesaTotal = 0
        for (let i of custos) {
            despesaTotal += i
        }
        if (custos.length == 0) {
            reject('Informe seus custos')
        }
        else {
            resolve(despesaTotal)
        }
    })
}

const calcularFluxoCaixa = () => {
    return Promise.all([
        calcularReceitas(3000, 350, 100),
        //calcularReceitas(),
        //calcularDespesas(),
        calcularDespesas(26.50, 110, 1180, 250, 314, 50.20)
    ])
}

calcularFluxoCaixa()
    .then(total => console.log(`Fluxo de caixa: ${total}`))
    .catch(err => console.log(`Erro: ${err}`))