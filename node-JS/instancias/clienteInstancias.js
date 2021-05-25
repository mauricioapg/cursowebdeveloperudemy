const unica = require('./instanciaUnica')
const unica2 = require('./instanciaUnica')

//Incrementou a mesma referência do objeto (instanciaUnica)
unica.inc()
unica.inc()
unica2.inc()
console.log( `${unica.valor} ${unica2.valor}`)

// chama uma função factory, e isso cria uma nova instância (objetos)
const nova = require('./instanciaNova')()
const nova2 = require('./instanciaNova')()

nova.inc()
nova.inc()
nova2.inc()
console.log( `${nova.valor} ${nova2.valor}`)