import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Row, Input, Button } from 'react-materialize'
import Alert from '../../components/generic/Alert/index'

import RegisterService from '../../services/RegistrarService'

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirectLogin: false,
            nome: '',
            email: '',
            password: '',
            validations: {
                nome: {
                    isValid: true,
                    message: 'Nome é obrigatório'
                },
                email: {
                    isValid: true,
                    message: 'Email é obrigatório'
                },
                password: {
                    isValid: true,
                    message: 'Senha é obrigatória'
                }
            }
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

    _register = () => {
        const user = this.state
        RegisterService
            .registrar(user.nome, user.email, user.password)
            .then(() => {
                this.setState({
                    success: 'Registro realizado com sucesso!',
                    error: ''
                })
            })
            .catch({

            })
    }

    _goLogin = () => {
        this.setState({
            shouldRedirectLogin: true
        });
    };

    _valiarUsuario = () => {
        let validations = this.state.validations
        validations.nome.isValid = this.state.nome.length > 0
        validations.email.isValid = this.state.email.length > 0
        validations.password.isValid = this.state.password.length > 0
    
        const allValidations = [
            validations.nome.isValid,
            validations.email.isValid,
            validations.password.isValid,
        ]
    
        const hasInvalidFields =
            allValidations.filter(v => !v).length > 0
    
        if (hasInvalidFields) {
            this.setState({ validations })
        } else {
            this._register();
        }
    }
    
    _renderErrorComponent(isValid, message) {
        return isValid ? null : (
            <span style={{ color: 'red' }}>{message}</span>
        )
    }

    _renderNome() {
        const nomeValidation = this.state.validations.nome
        return <div><Input type="text" label="Nome" s={12}
                    name="nome"
                    onChange={this.handleChange}
                    value={this.state.nome} />
                <br />
                {this._renderErrorComponent(
                    nomeValidation.isValid,
                    nomeValidation.message
                )}
        </div> 
    }

    _renderEmail() {
        const emailValidation = this.state.validations.email
        return <div><Input type="email" label="Email" s={12} 
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email} />
                <br />
                {this._renderErrorComponent(
                    emailValidation.isValid,
                    emailValidation.message
                )}
        </div> 
    }

    _renderPasword() {
        const passwordValidation = this.state.validations.password
        return <div><Input type="password" label="password" s={12} 
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password} />
                <br />
                {this._renderErrorComponent(
                    passwordValidation.isValid,
                    passwordValidation.message
                )}
        </div> 
    }

    _renderSuccess() {
        return this.state.success ? <Alert alertType='success' text={this.state.success}/> : undefined
    }

    _renderError() {
        return this.state.error ? <Alert alertType='danger' text={this.state.error}/> : undefined
    }


    render() {
        if (this.state.shouldRedirectLogin) {
            return <Redirect to="/login" />
        }

        return (
        <div className="container-login">
            <h1>Faça seu cadastro</h1>
            <div className="alert-login">
                {this._renderError()}
                {this._renderSuccess()}
            </div>
            <Row>
                {this._renderNome()}
                {this._renderEmail()}
                {this._renderPasword()}
            </Row>
            <Button className='btn' waves='light' onClick={this._valiarUsuario}>Cadastrar-se</Button><br/>
            <span onClick={this._goLogin}>Logar-se</span>
        </div>
        );
    }
}
