//PROCESS É UMA FORMA DE OBTER OS PARÂMETROS VINDOS DIRETO DO TECLADO, QUANDO O USUÁRIO DIGITA

const parametro = process.argv.indexOf('-a') !== -1
//console.log(parametro)

if(parametro){
    process.stdout.write('Usuário anônimo') //saída padrão
    process.exit()
}
else{
    process.stdout.write('Informe seu nome:')
    process.stdin.on('data', data => { //entrada padrão
        const nome = data.toString()

        process.stdout.write(`Fala, ${nome}!`)
        process.exit()
    })
}