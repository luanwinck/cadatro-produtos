import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Row, Input, Button } from 'react-materialize'

import CadastrarProdutoService from '../../services/CadastrarProdutoService'
import AlterarProdutoService from '../../services/AlterarProdutoService'

export default class CreateOrEditProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirectHome: false,
      descricao: '',
      un: '',
      estoque: '',
      precoMedio: ''
    };
  }

  handleChange = (event) => {
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
          [name]: value
      })
  }

  _backToHome = () => {
    this.setState({
        shouldRedirectHome: true
    });
  };

  _cadastrarProduto = () => {
    const produto = this.state
    CadastrarProdutoService
    .cadastrarProduto(produto.descricao, produto.un, produto.estoque, produto.precoMedio)
        .then((result) => {
            console.log(result.data)
            // this.setTempoAlert()
        }).catch((err) => {
            console.log('err')
            // this.setState({
            //     error: err.response.data.error,
            //     success: ''
            // })
            // this.setTempoAlert()
        })
  };

  _alterarProduto = () => {
    const post = this.state
    AlterarProdutoService
    .alterarProduto()
        .then((result) => {
            console.log(result.data)
            // this.setTempoAlert()
        }).catch((err) => {
            console.log('err')
            // this.setState({
            //     error: err.response.data.error,
            //     success: ''
            // })
            // this.setTempoAlert()
        })
  };



  render() {
    if (this.state.shouldRedirectHome) {
        return <Redirect to="/home" />
    }

    return (
      <div>
          <Row>
              <Input type="text" label="Descrição" s={12}
                      name="descricao"
                      onChange={this.handleChange}
                      value={this.state.descricao} />
              <Input type="text" label="UN" s={12}
                      name="un"
                      onChange={this.handleChange}
                      value={this.state.un} />
              <Input type="number" label="Estoque" s={12} 
                      name="estoque"
                      onChange={this.handleChange}
                      value={this.state.estoque} />
              <Input type="number" label="Preço Médio" s={12}
                      name="precoMedio"
                      onChange={this.handleChange}
                      value={this.state.precoMedio} />
          </Row>
          <Button waves='light' onClick={this._cadastrarProduto}>Cadastrar produto</Button>
          <Button waves='light' onClick={this._alterarProduto}>Alterar produto</Button>
          <Button waves='light' onClick={this._backToHome}>Home</Button>
      </div>
    );
  }
}
