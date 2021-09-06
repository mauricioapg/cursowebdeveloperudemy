import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado(){

    const [numero, setNumero] = useState(0) //React Hooks

    function Incrementar(){
        setNumero(numero + 1)
    }

    return(
        <Layout titulo="Componente com Estado">
            <h3>{numero}</h3>
            <button onClick={Incrementar}
            style={{
                backgroundColor: "#b34343",
                color: "beige",
                padding: "8px",
                borderRadius: "6px"
            }}>Incrementar</button>
        </Layout>
    )
}