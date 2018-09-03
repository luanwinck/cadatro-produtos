import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Row, Input, Button } from 'react-materialize'

import CadastrarProdutoService from '../../services/CadastrarProdutoService'

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



  render() {
    if (this.state.shouldRedirectHome) {
        return <Redirect to="/home" />
    }

    return (
      <div>
          <Row>
              <Input type="email" label="Email" s={12} />
              <Input type="password" label="password" s={12} />
          </Row>
          <Button waves='light' onClick={this._cadastrarProduto}>Cadastrar produto</Button>
          <Button waves='light' onClick={this._backToHome}>Home</Button>
      </div>
    );
  }
}
