import React from 'react'

const BomDia = props => <h1>Bom dia {props.nome}!</h1>
const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>
const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export {BoaNoite}
export default {BomDia, BoaTarde}