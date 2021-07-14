import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './Componentes/Primeiro'
import Saudacao from './Componentes/Saudacao'
import Multiplos, { BoaNoite } from './Componentes/Multiplos'
import Pessoa from './Componentes/Pessoa'
import Cadastro from './Componentes/Cadastro'

//ReactDOM.render(<Primeiro />, document.getElementById('root'))
//ReactDOM.render(<Saudacao nome="Mauricio" idade="29" />, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Cadastro />
    </div>, document.getElementById('root')
)