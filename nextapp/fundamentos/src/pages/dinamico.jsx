import Layout from '../components/Layout'

//método usado para garantir que o conteúdo será gerado dinamicamente
export async function getServerSideProps() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const dados = await resp.json()
    return {
        props: {
            dados,
            numero: Math.random()
        }
    }
}

// export async function getServerSideProps(){
//     return{
//         props:{
//             dados
//         }
//     }
// }

export default function Dinamico(props){
    return(
        <Layout titulo='Conteúdo Dinâmico'>
            <h3>{props.dados.title}</h3>
            <h3>{props.numero}</h3>
        </Layout>
    )
}