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
      play:false
    }
  }
  
  sendmsg=()=>{
   this.setState({play:true});
  setTimeout( () => {
    this.setState( play => ({
      play: false
    }));
  }, 2000);
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
        <input type="submit" value={'Send'} onClick={this.sendmsg} disabled={!this.props.srcInfo} />
            
      </form>
 {this.state.play?<audio src={hollow} controls autoPlay preload="auto" />:''}
        </div>
    )
  }
}

export default ChatInput
