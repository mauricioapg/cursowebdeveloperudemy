import Link from "next/Link";
import styles from '../styles/navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destino}>
            <div className={styles.navegador}
            style={{
                backgroundColor: props.corFundo ?? "#0000ff",
                color: props.corTexto ?? "beige"
            }}>
                {props.texto}
            </div>
        </Link>
    )
}