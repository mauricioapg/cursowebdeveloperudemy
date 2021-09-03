import Link from "next/Link";
import styles from '../styles/navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destino}>
            <div className={styles.navegador}
            style={{
                backgroundColor: props.cor ?? "#0000ff"
            }}>
                {props.texto}
            </div>
        </Link>
    )
}