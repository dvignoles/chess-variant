import React, { Component } from 'react';

class ChatMessages extends Component {

	renderMessage(message, index) {
		const {member, text} = message;
		const {currentMember} = this.props;
		const messageFromMe = member.username === currentMember.username;
		const className = messageFromMe ? 'Messages-message currentMember' : 'Messages-message';
		return (
		  <li className={className} key={`${member.username[0]}-${index}`}>
				<div className="Message-content">
					<div className="username">
						{member.username}
					</div>
					<div className="text">{text}</div>
				</div>
		  </li>
		);
	}

	scrollToBottom = () => {
	  this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
	}

	componentDidUpdate() {
	  this.scrollToBottom();
	}

	render() {
		const {messages} = this.props;
		return (
			<ul className="Messages-list">
				{messages.map((m, i) => this.renderMessage(m, i))}
				<li ref={(el) => { this.messagesEnd = el; }}></li>
			</ul>
		);
	}
}

export default ChatMessages;
