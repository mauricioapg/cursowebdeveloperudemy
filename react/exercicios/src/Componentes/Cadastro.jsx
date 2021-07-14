import React, { Component } from 'react'

export default class Cadastro extends Component {

    state = {
        nome: '',
        rg: '',
        uf: '',
        cidade: '',
        profissao: ''
    }

    constructor(props) {
        super(props)

        this.setCampos = this.setCampos.bind(this)
    }

    setCampos() {
        this.setState({ nome: document.getElementById('txtNome').value })
        this.setState({ rg: document.getElementById('txtRg').value })
        this.setState({ uf: document.getElementById('cmbUf').value })
        this.setState({ cidade: document.getElementById('txtCidade').value })
        this.setState({ profissao: document.getElementById('txtProfissao').value })
    }

    render() {

        const { nome, rg, uf, cidade, profissao } = this.state

        return (
            <div>
                <h1>Cadastro de Usuário</h1>
                <hr />
                <table>
                    <tr>
                        <td>
                            <strong>
                                Nome:
                            </strong>
                        </td>
                        <td>
                            <input id="txtNome" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                RG:
                            </strong>
                        </td>
                        <td>
                            <input id="txtRg" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                UF:
                            </strong>
                        </td>
                        <td>
                            <select id="cmbUf" name="UF">
                                <option value="SP">SP</option>
                                <option value="RJ">RJ</option>
                                <option value="MG">MG</option>
                                <option value="CE">CE</option>
                                <option value="PE">PE</option>
                                <option value="RS">RS</option>
                                <option value="AC">AC</option>
                                <option value="DF">DF</option>
                                <option value="SE">SE</option>
                                <option value="PB">PB</option>
                                <option value="RN">RN</option>
                                <option value="BA">BA</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                Cidade:
                            </strong>
                        </td>
                        <td>
                            <input id="txtCidade" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                Profissão:
                            </strong>
                        </td>
                        <td>
                            <input id="txtProfissao" type="text" />
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                            <input id="btnCadastrar" type="button" value="Cadastrar" onClick={this.setCampos} />
                        </td>
                    </tr>
                </table>
                <hr />
                <h2>Informações:</h2>
                <table>
                    <tr>
                        <td>
                            <strong>
                                Nome:
                            </strong>
                        </td>
                        <td id="labelNome">{nome}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                RG:
                            </strong>
                        </td>
                        <td id="labelRg">{rg}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                UF:
                            </strong>
                        </td>
                        <td id="labelUf">{uf}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                Cidade:
                            </strong>
                        </td>
                        <td id="labelCidade">{cidade}</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>
                                Profissão:
                            </strong>
                        </td>
                        <td id="labelProfissao">{profissao}</td>
                    </tr>
                </table>
            </div>
        )
    }
}