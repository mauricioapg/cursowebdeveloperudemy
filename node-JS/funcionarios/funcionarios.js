const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //quando está em node_modules não precisa mostrar a pasta

/*axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})*/

//Mulher chinesa com menor salário?

const chineses = funcionario => funcionario.pais == 'China'
const mulheres = funcionario => funcionario.genero == 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})



