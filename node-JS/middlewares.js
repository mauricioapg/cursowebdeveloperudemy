//Padrão Middleware (chain of responsability)
//O programa alterna entre as etapas de forma independente, sem necessariamente seguir uma ordem.
//A função next() é quem saberá qual o próximo passo 

const middleware1 = (contexto, next) => {
    contexto.valor1 = 'passo 1'
    next()
}

const middleware2 = (contexto, next) => {
    contexto.valor2 = 'passo 2'
    next()
}

const middleware3 = contexto => contexto.valor3 = 'passo 3'

//função recursiva que executa os passos middlewares
const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, middleware2, middleware1, middleware3)
console.log(contexto)