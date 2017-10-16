import React, { Component } from 'react';

export default class ChatLog extends Component {
  render() {
    return (
      <div>
        <small>{this.props.author}</small>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
