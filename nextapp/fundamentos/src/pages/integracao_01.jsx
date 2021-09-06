import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [id, setId] = useState(1)
    const [clube, setClube] = useState({})

    async function ObterCLube() {

        //MODO ASSÍNCRONO
        const resp = await fetch(`http://localhost:3000/api/clubes/${id}`)
        const dados = await resp.json()
        setClube(dados)

        //MODO SÍNCRONO
        // fetch(`http://localhost:3000/api/clubes/${id}`)
        //     .then(resp => resp.json())
        //     .then(dados => setClube(dados))
    }

    return (
        <Layout titulo='Integração 01'>
            <h3>Clubes</h3>
            <div>
                <input type="number" value={id}
                    onChange={e => setId(e.target.value)} />
                <button onClick={ObterCLube}>Obter Clube</button>
            </div>
            <ul>
                <li>ID: {clube.id}</li>
                <li>Nome: {clube.nome}</li>
                <li>Fundação: {clube.fundacao}</li>
                <li>Cor Primária: {clube.corPrimaria}</li>
                <li>Cor Secundária: {clube.corSecundaria}</li>
            </ul>
        </Layout>
    )
}