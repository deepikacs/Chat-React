import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {SearchDetails} from '../../Actions/SearchAction';
import {userInformation} from '../../Actions/SignupAction';
import './Search.css';
import ItemWrapper from './ItemWrapper';

class Search extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            searchState:'',
            color:''
        };
    }
componentDidMount(){
    this.props.userInformation();
}
   
    SearchName=()=>{
        let reqobj={
            username:this.state.searchState
        }
       
      this.props.SearchDetails(reqobj);
    
}
handleClick=(e,username)=>{
    let reqobj={
        username:username
    }
    this.props.SearchDetails(reqobj);
}

clearAll(){
    debugger
}

    render() {
        return (
            <div>
                <center> <input type="text" name="search" onChange={e => this.setState({ searchState: e.target.value })} value={this.state.searchState} />
                <button onClick={this.SearchName} >Search</button></center>
           {this.props.result.map((item,index)=>{
               return <ItemWrapper clearAll={this.clearAll} index={index} item={item} handleClick={this.handleClick} />
           })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { error, message,srcInfo } = state.SearchReducers;
    const { result } = state.SignupReducers;
    return { error, message,srcInfo ,result};
  };
  
  export default withRouter(connect(mapStateToProps, { SearchDetails,userInformation })(Search));