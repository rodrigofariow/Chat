import React, { Component } from "react";

export default class ChatMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }
    
    handleEnter = (e) => {

        if (e.key === 'Enter') {
            console.log('do validate');
        }

    };


    render() {
        return (
            <div>
                <input style={{'width': '100%'}} type="text" onKeyPress={this.handleEnter}></input>
            </div>
        );
    }
}
