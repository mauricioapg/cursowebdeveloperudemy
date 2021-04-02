function planejarViagem(europa, america){
    const comprarPassagem = europa || america //operador OU
    const conhecerContinenteDiferente = europa && america //operador AND
    const manterNoPais = !comprarPassagem //operador NOR (negação)

    return {comprarPassagem, conhecerContinenteDiferente, manterNoPais}
}

console.log(planejarViagem(false, false))
