import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './Componentes/Primeiro'
import Saudacao from './Componentes/Saudacao'
import Multiplos, { BoaNoite } from './Componentes/Multiplos'

//ReactDOM.render(<Primeiro />, document.getElementById('root'))
//ReactDOM.render(<Saudacao nome="Mauricio" idade="29" />, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Multiplos.BomDia nome="Mauricio"/>
        <Multiplos.BoaTarde nome="Lindsay"/>
        <BoaNoite nome="Mônica"/>
    </div>, document.getElementById('root')
)