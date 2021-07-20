import React from 'react'
import './NavItem.css'

export default props =>
    <a href={props.destino}>
        <i>{props.title}</i>
    </a>