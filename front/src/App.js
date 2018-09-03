import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom'

import './App.css';

import axios from 'axios'

import Loading from './components/generic/Loading/index'
import Home from './scenes/Home/index'
import Login from './scenes/Login/index'

class App extends Component {

  constructor() {
    super()
    this.axiosConfig()
    this.state = {
      loading: false
    };
  }

  axiosConfig() {
    const self = this
    axios.interceptors.request.use((config) => {
      self.toggleLoading()
      return config
    });

    axios.interceptors.response.use((response) => {
      self.toggleLoading()
      return response;
    }, (error) => {
      self.toggleLoading()
      return Promise.reject(error)
    })
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }


  render() {
    return (
      <div className="App">

        <div className="App--content">
        {this.state.loading && <Loading />}

        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" component={Login}/>

            <Redirect to="/home" />
        </Switch>
        </div>
      </div>
    );
  }

}

export default App;
