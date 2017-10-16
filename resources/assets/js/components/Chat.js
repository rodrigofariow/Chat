import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChatMessage from "./ChatMessage";
export default class Chat extends Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: [{ author: 'Rodrigo', text: 'text' }, { author: 'Vic', text: 'text' }, { author: 'Rodrigo', text: 'text' }]
		}
	}

	render() {
		const messages = this.state.messages;
		let messagesComponent = [];
		messages.map((msg) => messagesComponent.push(<ChatMessage author={msg.author} text={msg.text}></ChatMessage>));
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="panel panel-default">
							<div className="panel-heading">Chat</div>
							<div className="panel-body">
								{messagesComponent}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById("root")) {
	ReactDOM.render(<Chat />, document.getElementById("root"));
}
