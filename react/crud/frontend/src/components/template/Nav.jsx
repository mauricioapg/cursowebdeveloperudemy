import React from 'react'
import './Nav.css'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <React.Fragment>
                <NavItem {...props} />
                <NavItem {...props} title="Usuários" destino="/users"/>
            </React.Fragment>
        </nav>
    </aside>

    {/* <nav className="menu">
            <a href="#/">
                <i className="fa fa-home">Início</i>
            </a>
            <a href="#/users">
                <i className="fa fa-users">Usuários</i>
            </a>
        </nav> */}