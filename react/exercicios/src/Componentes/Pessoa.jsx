import React, { Component } from 'react'

export default class Pessoa extends Component {

    //açterando o estado fora do construtor
    state = {
        id: this.props.id, //recebeu o valor das propriedades passadas
        nome: '',
        idade: '',
        cpf: '',
        profissao: '',
        salario: '',
    }

    //usando contrutor
    constructor(props){
        super(props)

        this.setNome = this.setNome.bind(this)
        this.setIdade = this.setIdade.bind(this)
        this.setCpf = this.setCpf.bind(this)
        this.setProfissao = this.setProfissao.bind(this)
        this.setSalario = this.setSalario.bind(this)
    }

    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }

    setIdade(e) {
        this.setState({
            idade: e.target.value
        })
    }

    setCpf(e) {
        this.setState({
            cpf: e.target.value
        })
    }

    setProfissao(e) {
        this.setState({
            profissao: e.target.value
        })
    }

    setSalario(e) {
        this.setState({
            salario: e.target.value
        })
    }

    render() {
        const { id, nome, idade, cpf, profissao, salario } = this.state
        return (
            <div>
                <h2>Informações</h2>
                <hr />
                <strong>
                    <h3>ID: </h3>
                </strong>
                <label>{id}</label>
                <br />
                <br />
                <strong>
                    <h3>Nome: </h3>
                </strong>
                <input type="text" onChange={this.setNome} />
                <br />
                <br />
                <strong>
                    <h3>Idade: </h3>
                </strong>
                <input type="text" onChange={this.setIdade} />
                <br />
                <br />
                <strong>
                    <h3>CPF: </h3>
                </strong>
                <input type="text" onChange={this.setCpf} />
                <br />
                <br />
                <strong>
                    <h3>Profissão: </h3>
                </strong>
                <input type="text" onChange={this.setProfissao} />
                <br />
                <br />
                <strong>
                    <h3>Salário: </h3>
                </strong>
                <input type="text" onChange={this.setSalario} />
                <br />
                <br />
                <h3 id="nome">{nome}</h3>
                <h3 id="idade">{idade}</h3>
                <h3 id="cpf">{cpf}</h3>
                <h3 id="profissao">{profissao}</h3>
                <h3 id="salario">{salario}</h3>
            </div>
        )
    }

    /* state = {
        nome: 'João'
    }

    setTipo(e){
        this.props.nome = e.target.value
    }

    render() {

        const { nome } = this.state

        return (
            <div>
                <h1>{nome}</h1>
                <hr />
                <input type="text" value={nome} onChange={e => this.setTipo(e)} />
            </div>
        )
    } */
}