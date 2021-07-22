import React from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={props.destino}>
        <i>{props.title}</i>
    </Link>