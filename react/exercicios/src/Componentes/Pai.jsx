import React from 'react'
import Filho from './Filho'
import { FilhosHerdandoPai } from '../Utils/utils'

export default props =>
    <div>
        <h1>Pai: {props.nome} {props.sobrenome}</h1> {/* Nome e sobrenome do componente Pai */}
        <h2>Filhos:</h2>
        <ul>

            {/* Vários filhos herdando do pai */}
            {FilhosHerdandoPai(props)}

            {/* <Filho nome='Marcelo Aparecido' sobrenome={props.sobrenome} /> */} {/* Filho herdando sobrenome do componente Pai */}
            {/* <Filho nome='Mauricio Aparecido' sobrenome={props.sobrenome} /> */} {/* Filho herdando sobrenome do componente Pai */}
            {/* <Filho {...props} nome='Mônica Aparecida' /> */} {/* Filho herdando todas as propriedades do componente Pai, mas sobrescrevendo a propriedade Nome */}
        </ul>
    </div>