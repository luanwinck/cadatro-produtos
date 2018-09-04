import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import './style.css'

import { Button, Table, Row, Input, Icon } from 'react-materialize'

import GetProdutosService from '../../services/GetProdutosService'
import GetProdutoPorDescricaoService from '../../services/GetProdutoPorDescricaoService'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        shouldRedirectLogin: false,
        shouldRedirectCadastrarProduto: false,
        shouldRedirectEditarProduto: false,
        produtos: [],
        busca: '',
        codigo: ''
    };
    
  }

  componentDidMount() {
      this.getProdutos()
  }

  getProdutos() {
      GetProdutosService
          .getProdutos()
          .then((result) => {
              this.setState({
                  produtos: result.data
              })
              console.log(result.data)
          }).catch((err) => {
          })
  }

  getProdutosPorDescricao = () => {
      GetProdutoPorDescricaoService
          .getProdutoPorDescricao(this.state.busca)
          .then((result) => {
              this.setState({
                  produtos: result.data
              })
              console.log(result.data)
          }).catch((err) => {
          })
  }

  handleChange = (event) => {
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
          [name]: value
      })
  }

  _goToEditProduto = (codigo) => {
      console.log(codigo)
    this.setState({
        shouldRedirectEditarProduto: true,
        codigo
    });
  };


  _logout = () => {
    this.setState({
        shouldRedirectLogin: true
    });
  };

  renderProdutos() {
    return this.state.produtos.map((p,k) => {
      return<tr>
            <td>{p._codigo}</td>
            <td>{p._descricao}</td>
            <td>{p._un}</td>
            <td>{p._estoque}</td>
            <td>{p._precoMedio}</td>
            <td>{p._estoque * p._precoMedio}</td>
            <td>
                <span className="icons" onClick={() => this._goToEditProduto(p._codigo)}><Icon>create</Icon></span>
                <span className="icons"><Icon>clear</Icon></span>
            </td>
          </tr>
    })
  }
  

  render() {
    if (this.state.shouldRedirectLogin) {
        return <Redirect to="/login" />
    } else if (this.state.shouldRedirectCadastrarProduto) {
        return <Redirect to="/cadastrar-produto" />
    } else if (this.state.shouldRedirectEditarProduto) {
        console.log(this.state.codigo)
        return <Redirect to={`/editar-produto/${this.state.codigo}`} />
    }

    return (
      <div>
          <h1>Home</h1>
          <Row>
              <Input type="text" label="Consultar produto" s={6}
                      name="busca"
                      onChange={this.handleChange}
                      value={this.state.busca} />
              <Button waves='light' onClick={this.getProdutosPorDescricao}>Buscar</Button>
          </Row>
          <Table>
            <thead>
              <tr>
                <th data-field="id">Codigo</th>
                <th data-field="name">Descricao</th>
                <th data-field="price">un</th>
                <th data-field="price">Estoque</th>
                <th data-field="price">Preço Médio</th>
                <th data-field="price">Preço Total</th>
                <th data-field="price">Ação</th>
              </tr>
            </thead>

            <tbody>
              {this.renderProdutos()}
            </tbody>
          </Table>
          <Button waves='light' className="red" onClick={this._logout}>Logout</Button>
      </div>
    );
  }
}
