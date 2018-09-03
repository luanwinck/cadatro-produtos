import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Button } from 'react-materialize'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        shouldRedirectLogin: false
    };
  }

  _logout = () => {
    this.setState({
        shouldRedirectLogin: true
    });
  };
  

  render() {
    if (this.state.shouldRedirectLogin) {
        return <Redirect to="/login" />
    }

    return (
      <div>
          <h1>Home</h1>
          <Button waves='light' className="red" onClick={this._logout}>Logout</Button>
      </div>
    );
  }
}
