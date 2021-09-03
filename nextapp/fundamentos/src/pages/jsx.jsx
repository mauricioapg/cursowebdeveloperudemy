import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

export default function JSX(){

    //Aqui fora do return tem código JS

    const titulo = <h2>JSX vs JS</h2>
    var n1 = 10
    var n2 = 6
    var n3 = 7.5

    var media = (v1, v2, v3) => {
        var soma = v1 + v2 + v3
        return soma / 3
    }

    return(
        //Aqui dentro tem código JSX, porém dentro das chaves tem código JS
        <Layout titulo="JSX vs JS">
            <div>
                <Cabecalho titulo="JSX vs JS" />
                <p>{"N1: " + n1}</p>
                <p>{"N2: " + n2}</p>
                <p>{"N3: " + n3}</p>
                <h3>{"Sua média é igual a:"}</h3>
                <p>{media(n1, n2, n3).toFixed(1)}</p>
            </div>
        </Layout>
    )
}