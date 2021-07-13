import React from 'react'

//forma de envolver vários componentes usado <div>
export default props =>
    <div>
        <h1>Bom dia, {props.nome}!</h1>
        <h3>Sua idade é: {props.idade} anos</h3>
        <h3>Seja bem vindo à nossa página!</h3>
    </div>

//forma de envolver vários componentes usado Array (precisa adicionar a propriedade key)
/* export default props => [
    <h1 key='saudacao'>Bom dia, {props.nome}!</h1>,
        <h3 key='idade'>Sua idade é: {props.idade} anos</h3>,
        <h3 key='mensagem'>Seja bem vindo à nossa página!</h3>
] */

//forma de envolver vários componentes usado React.Fragment
/* export default props =>
    <React.Fragment>
        <h1>Bom dia, {props.nome}!</h1>
        <h3>Sua idade é: {props.idade} anos</h3>
        <h3>Seja bem vindo à nossa página!</h3>
    </React.Fragment> */