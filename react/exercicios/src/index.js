import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './Componentes/Primeiro'
import Saudacao from './Componentes/Saudacao'
import Multiplos, { BoaNoite } from './Componentes/Multiplos'
import Pessoa from './Componentes/Pessoa'
import Cadastro from './Componentes/Cadastro'
import Pai from './Componentes/Pai'
import Filho from './Componentes/Filho'

//ReactDOM.render(<Primeiro />, document.getElementById('root'))
//ReactDOM.render(<Saudacao nome="Mauricio" idade="29" />, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome='Joaquim' sobrenome='Gabriel'>
            <Filho nome="Marcelo Aparecido" />
            <Filho nome="Mauricio Aparecido" />
            <Filho nome="Mônica Aparecida" />
        </Pai>
    </div>, document.getElementById('root')
)