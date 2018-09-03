import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import { Row, Input, Button } from 'react-materialize'

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirectHome: false
    };
  }

  _login = () => {
    this.setState({
        shouldRedirectHome: true
    });
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
          <Button waves='light' onClick={this._login}>Login</Button>
      </div>
    );
  }
}
