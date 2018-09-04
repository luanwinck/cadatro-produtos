import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Row, Input, Button } from 'react-materialize'

import CadastrarProdutoService from '../../services/CadastrarProdutoService'
import AlterarProdutoService from '../../services/AlterarProdutoService'

export default class CreateOrEditProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirectHome: false
    };
  }

  _backToHome = () => {
    this.setState({
        shouldRedirectHome: true
    });
  };

  _cadastrarProduto = () => {
    const post = this.state
    CadastrarProdutoService
    .cadastrarProduto()
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
              <Input type="text" label="Descrição" s={12} />
              <Input type="text" label="UN" s={12} />
              <Input type="number" label="Estoque" s={12} />
              <Input type="number" label="Preço Médio" s={12} />
          </Row>
          <Button waves='light' onClick={this._cadastrarProduto}>Cadastrar produto</Button>
          <Button waves='light' onClick={this._alterarProduto}>Alterar produto</Button>
          <Button waves='light' onClick={this._backToHome}>Home</Button>
      </div>
    );
  }
}
