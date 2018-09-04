import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Row, Input, Button } from 'react-materialize'

import CadastrarProdutoService from '../../services/CadastrarProdutoService'
import AlterarProdutoService from '../../services/AlterarProdutoService'
import GetProdutoPorIdService from '../../services/GetProdutoPorIdService'

export default class CreateOrEditProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirectHome: false,
      codigo: '',
      descricao: '',
      un: '',
      estoque: '',
      precoMedio: '',
      inputPreenchido: undefined,
      editarProduto: false
    };
  }

  componentDidMount() {
        if (!!this.props.match.params.codigo) {
            const codigo = this.props.match.params.codigo

            GetProdutoPorIdService
            .getProdutoPorId(codigo)
                .then((result) => {
                    const produto = result.data
                    this.setState({
                        codigo,
                        descricao: produto._descricao,
                        un: produto._un,
                        estoque: produto._estoque,
                        precoMedio: produto._precoMedio,
                        inputPreenchido: 'x',
                        editarProduto: true
                    })
                }).catch((err) => {
                    this.setState({
                        error: '',
                    })
                })
        }
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
    const produto = this.state
    AlterarProdutoService
    .alterarProduto(produto.codigo, produto.descricao, produto.un, produto.estoque, produto.precoMedio)
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
                      value={this.state.descricao}
                      placeholder={this.state.inputPreenchido}/>
              <Input type="text" label="UN" s={12}
                      name="un"
                      onChange={this.handleChange}
                      value={this.state.un} 
                      placeholder={this.state.inputPreenchido}/>
              <Input type="number" label="Estoque" s={12} 
                      name="estoque"
                      onChange={this.handleChange}
                      value={this.state.estoque} 
                      placeholder={this.state.inputPreenchido}/>
              <Input type="number" label="Preço Médio" s={12}
                      name="precoMedio"
                      onChange={this.handleChange}
                      value={this.state.precoMedio} 
                      placeholder={this.state.inputPreenchido}/>
          </Row>

          <Button className='btn' waves='light' onClick={this._backToHome}>Home</Button>

          {this.state.editarProduto ? 
            <Button className='btn' waves='light' onClick={this._alterarProduto}>Alterar produto</Button> : 
            <Button className='btn' waves='light' onClick={this._cadastrarProduto}>Cadastrar produto</Button>}
      </div>
    );
  }
}
