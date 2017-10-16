import React, { Component } from 'react';

export default class ChatMessage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.author}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
