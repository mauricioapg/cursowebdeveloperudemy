import Layout from '../components/Layout'

//método usado para garantir que o conteúdo será gerado uma única vez (estático)
//só funciona na versão de produção (build)
export async function getStaticProps() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const dados = await resp.json()
    return {
        props: {
            dados,
            numero: Math.random()
        }
    }
}

// export async function getStaticProps(){
//     return{
//         props: {
//             numero: Math.random()
//         }
//     }
// }

export default function Estatico(props) {
    return (
        <Layout titulo='Conteúdo Estático'>
            { }
            <span>
                <h3>{props.dados.title}</h3>
                <h3>{props.numero}</h3>
            </span>
        </Layout>
    )
}