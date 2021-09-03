import Link from 'next/Link'
import styles from '../styles/layout.module.css'

export default function Layout(props){
    return(
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}