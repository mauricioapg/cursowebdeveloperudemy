import styles from '../styles/estiloso.module.css'
import Layout from '../components/Layout'
import Cabecalho from '../components/Cabecalho'

export default function Estiloso(){

    return(
        <Layout titulo="Estiloso">
            <div className={styles.roxo}>
                <Cabecalho titulo="Estilo usando CSS Modularizado" />
            </div>
        </Layout>
    )
}