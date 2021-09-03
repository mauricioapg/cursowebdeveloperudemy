import Navegador from '../components/Navegador'

export default function Titulo() {
    return (
        //Não é Javscript puro. É JSX que será convertido em JS
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexWrap: "wrap"
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" />
            <Navegador destino="/exemplo" texto="Exemplo" cor="#808080" />
            <Navegador destino="/jsx" texto="JSX" cor="#000" />
            <Navegador destino="/navegacao/" texto="Navegação 01" cor="#008000" />
            <Navegador destino="/cliente/sp/123" texto="Navegação 02" cor="#ff4500" />
            <Navegador destino="/estado" texto="Componente com Estado" cor="#256d6d" />
        </div>
    )
}