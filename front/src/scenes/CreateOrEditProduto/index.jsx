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
      editarProduto: false,
      validations: {
        descricao: {
            isValid: true,
            message: 'Descrição é obrigatória'
        },
        un: {
            isValid: true,
            message: 'UN é obrigatório'
        },
        estoque: {
            isValid: true,
            message: 'Estoque é obrigatório'
        },
        precoMedio: {
            isValid: true,
            message: 'Preço médio é obrigatório'
        },
      }
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
      if (this._valiarProduto()) {
        const produto = this.state
        CadastrarProdutoService
        .cadastrarProduto(produto.descricao, produto.un, produto.estoque, produto.precoMedio)
            .then((result) => {
                this.setState({
                    success: 'Produto cadastrado com sucesso!',
                    error: '',
                    descricao: '',
                    un: '',
                    estoque: '',
                    precoMedio: '',
                })
            }).catch((err) => {
                this.setState({
                    error: 'Erro ao cadastrar um novo produto',
                    success: ''
                })
                // this.setTempoAlert()
            })
      }
  };

  _alterarProduto = () => {
    if (this._valiarProduto()) {
        const produto = this.state
        AlterarProdutoService
        .alterarProduto(produto.codigo, produto.descricao, produto.un, produto.estoque, produto.precoMedio)
            .then((result) => {
                this.setState({
                    success: 'Produto alterado com sucesso!',
                    error: '',
                })
                // this.setTempoAlert()
            }).catch((err) => {
                console.log('err')
                // this.setState({
                //     error: err.response.data.error,
                //     success: ''
                // })
                // this.setTempoAlert()
            })
    }
  };

  _valiarProduto() {
    let validations = this.state.validations
    validations.descricao.isValid = this.state.descricao.length > 0
    validations.un.isValid = this.state.un.length > 0
    validations.estoque.isValid = this.state.estoque.length > 0
    validations.precoMedio.isValid = this.state.precoMedio.length > 0

    const allValidations = [
        validations.descricao.isValid,
        validations.un.isValid,
        validations.estoque.isValid,
        validations.precoMedio.isValid
    ]

    const hasInvalidFields =
        allValidations.filter(isValid => isValid === false).length > 0

    if (hasInvalidFields) {
        this.setState({ validations })
        return false
    } else {
        return true
    }
 }

_renderErrorComponent(isValid, message) {
    return isValid ? null : (
        <span style={{ color: 'red' }}>{message}</span>
    )
}

_renderDescricao() {
    const descricaoValidation = this.state.validations.descricao
    return <div><Input type="text" label="Descrição" s={12}
            name="descricao"
            onChange={this.handleChange}
            value={this.state.descricao}
            placeholder={this.state.inputPreenchido}/>
            <br />
            {this._renderErrorComponent(
                descricaoValidation.isValid,
                descricaoValidation.message
            )}
    </div> 
}

_renderUn() {
    const unValidation = this.state.validations.un
    return <div><Input type="text" label="UN" s={12}
                name="un"
                onChange={this.handleChange}
                value={this.state.un} 
                placeholder={this.state.inputPreenchido}/>
            <br />
            {this._renderErrorComponent(
                unValidation.isValid,
                unValidation.message
            )}
    </div> 
}

_renderEstoque() {
    const estoqueValidation = this.state.validations.estoque
    return <div><Input type="number" label="Estoque" s={12} 
                name="estoque"
                onChange={this.handleChange}
                value={this.state.estoque} 
                placeholder={this.state.inputPreenchido}/>
            <br />
            {this._renderErrorComponent(
                estoqueValidation.isValid,
                estoqueValidation.message
            )}
    </div> 
}

_renderPrecoMedio() {
    const precoMedioValidation = this.state.validations.precoMedio
    return <div><Input type="number" label="Preço Médio" s={12}
                name="precoMedio"
                onChange={this.handleChange}
                value={this.state.precoMedio} 
                placeholder={this.state.inputPreenchido}/>
            <br />
            {this._renderErrorComponent(
                precoMedioValidation.isValid,
                precoMedioValidation.message
            )}
    </div> 
}





  render() {
    if (this.state.shouldRedirectHome) {
        return <Redirect to="/home" />
    }

    return (
      <div>
          <Row>
              {this._renderDescricao()}
              {this._renderUn()}
              {this._renderEstoque()}
              {this._renderPrecoMedio()}
              
          </Row>

          <Button className='btn' waves='light' onClick={this._backToHome}>Home</Button>

          {this.state.editarProduto ? 
            <Button className='btn' waves='light' onClick={this._alterarProduto}>Alterar produto</Button> : 
            <Button className='btn' waves='light' onClick={this._cadastrarProduto}>Cadastrar produto</Button>}
      </div>
    );
  }
}
