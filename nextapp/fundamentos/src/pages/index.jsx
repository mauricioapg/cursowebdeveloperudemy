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
            <Navegador destino="/exemplo" texto="Exemplo" corFundo="#808080" />
            <Navegador destino="/jsx" texto="JSX" corFundo="#000" />
            <Navegador destino="/navegacao/" texto="Navegação 01" corFundo="#008000" />
            <Navegador destino="/cliente/sp/123" texto="Navegação 02" corFundo="#ff4500" />
            <Navegador destino="/estado" texto="Componente com Estado" corFundo="#256d6d" />
            <Navegador destino="/integracao_01" texto="Integração com API 01" corFundo="#59a40e" />
            <Navegador destino="/estatico" texto="Gerando Conteúdo Estático" corFundo="#00bfff" />
            <Navegador destino="/dinamico" texto="Gerando Conteúdo Dinâmico" corFundo="#dc143c" />
        </div>
    )
}