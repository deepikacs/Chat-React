import React, { Component } from 'react'
import PropTypes from 'prop-types';
import hollow from './hollow.ogg';

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  constructor(props){
    super(props);
    this.state = {
      message: '',
      play:true
    }
  }
  
  sendmsg=()=>{
    debugger;
    // this.playSound();
   this.setState({play:!this.state.play});
   console.log(this.state.play)
  }
  
  

  render() {
    return (
      <div>
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input className="mtop-300"
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input type="submit" value={'Send'} onClick={this.sendmsg} />
            
      </form>
 {this.state.play?'':<audio src={hollow} controls autoPlay preload="auto" />}
 {/* <audio src={hollow} controls autoPlay preload="auto" onClick={() => this.playSound()} /> */}
        </div>
    )
  }
}

export default ChatInput
