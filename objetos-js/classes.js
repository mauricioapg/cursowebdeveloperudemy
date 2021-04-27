class Lancamentos {
    constructor(descricao, valor) {
        this.descricao = descricao
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    adicionarLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    atualizarResumo(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

//RECEITAS
const salario = new Lancamentos('Salário', 4200)
const horaExtra = new Lancamentos('Hora-extra', 150)
const freelas = new Lancamentos('Freelas', 800)
const dividendos = new Lancamentos('Dividendos', 750)

//DESPESAS
const contaInternet = new Lancamentos('Conta de internet', -120)
const contaLuz = new Lancamentos('Conta de luz', -86)
const aluguel = new Lancamentos('Aluguel', -650)

const financeiro = new CicloFinanceiro(4, 2021)
financeiro.adicionarLancamento(salario, horaExtra, freelas, dividendos, contaInternet, contaLuz, aluguel)

console.log(financeiro.atualizarResumo())