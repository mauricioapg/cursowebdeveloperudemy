import Entrada from "./Entrada";
import Cliente from '../core/Cliente'
import { useState } from "react";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState()
    return (
        <div>
            {id ? (
                <Entrada valor="teste" texto="ID"></Entrada>
            ): false}
            <Entrada tipo="text" valor="teste" texto="Nome"></Entrada>
            <Entrada tipo="number" valor="29" texto="Idade" somenteLeitura={true}></Entrada>
        </div>
    )
}