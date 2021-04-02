function imprimirPais(pais){
    try{
        console.log(pais.nome.toUpperCase())
    }catch(e){
        throw 'Erro ao exibir país'
    }
    finally{
        console.log('fim')
    }
}

const pais = {nome: 'Brasil'}
imprimirPais(pais)