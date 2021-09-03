import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

export default function Exemplo() {
    return (
        //Tag vazia significa React.Fragment
        <>
            <Layout titulo="Página de Exemplo">
                <Cabecalho titulo="Exemplo" />
            </Layout>
        </>
    )
}