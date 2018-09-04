import React from 'react'

import './style.css'

export default class Alert extends React.Component {
    render() {
        return <div className={`alert alert-${this.props.alertType}`}
            role="alert">
            {this.props.text}
        </div>
    }
}
