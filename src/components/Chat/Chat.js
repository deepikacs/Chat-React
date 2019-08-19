import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {SearchDetails} from '../../Actions/SearchAction';

const URL = 'ws://localhost:3030'

class Chat extends Component {
  state = {
    name: '',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.props.srcInfo, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div>
        <center>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            value={this.props.srcInfo}
            className="borderNone"
          />
        </label>
        </center>
        <div className="msg-div-align">
        {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
        </div>
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
       
      </div>
    )
  }
}

// export default Chat;
const mapStateToProps = (state) => {
  const { error, message,srcInfo } = state.SearchReducers;
  return { error, message,srcInfo };
};

export default withRouter(connect(mapStateToProps, { SearchDetails })(Chat));
