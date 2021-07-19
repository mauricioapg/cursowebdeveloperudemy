import React from 'react'
import './Main.css'
import Header from './Header.jsx'

export default props =>
    <React.Fragment>
        <Header />
        <main className="content">
            Conteúdo...
        </main>
    </React.Fragment>