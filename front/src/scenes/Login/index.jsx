import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Row, Input, Button } from 'react-materialize'
import Alert from '../../components/generic/Alert/index'

import './style.css'

import LoginService from '../../services/LoginService'


export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirectHome: false,
      shouldRedirectRegister: false,
      email: '',
      password: '',
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

  _login = () => {
    const user = this.state
    LoginService
      .login(user.email, user.password)
      .then((res) => {
          this.setState({
              shouldRedirectHome: true
          });
      })
      .catch(() => {
        this.setState({
          error: 'Email ou senha incorretos'
        })
      })
  };
  
  _goRegister = () => {
    this.setState({
      shouldRedirectRegister: true
  });
  }

  _renderError() {
      return this.state.error ? <Alert alertType='danger' text={this.state.error}/> : undefined
  }

  render() {
    if (this.state.shouldRedirectHome) {
        return <Redirect to="/home" />
    } else if (this.state.shouldRedirectRegister) {
      return <Redirect to="/registrar" />
  }

    return (
      <div className="container-login">
          <h1>Faça login ou cadastre-se</h1>
          <div className="alert-login">
            {this._renderError()}
          </div>
          <Row>
              <Input type="email" label="Email" s={12} 
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email} />
              <Input type="password" label="password" s={12} 
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password} />
          </Row>
          <Button className='btn' waves='light' onClick={this._login}>Login</Button><br/>
          <span onClick={this._goRegister}>Cadastre-se</span>
      </div>
    );
  }
}
