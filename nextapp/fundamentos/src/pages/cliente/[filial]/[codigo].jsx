import Layout from "../../../components/Layout";
import { useRouter} from "next/router";

export default function ClientePorCodigo(){

    //Isso aqui é um Hook
    const router = useRouter()

    return(
        //Recupero o parâmetro informado na url
        <Layout titulo="Navegação Dinâmica">
            <h3>Código: {router.query.codigo}</h3>
            <h3>Filial: {router.query.filial}</h3>
        </Layout>
    )
}