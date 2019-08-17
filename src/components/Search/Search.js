import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {SearchDetails} from '../../Actions/SearchAction';
// import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            searchState:''
        };
    }

   
    SearchName=()=>{
        debugger;
       
      this.props.SearchDetails(this.state.searchState);
    
}
    render() {
        return (
            <div>
                 <input type="text" name="search" onChange={e => this.setState({ searchState: e.target.value })} value={this.state.searchState} />
                <button onClick={this.SearchName} >Search</button>
           {this.props.message}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger;
    const { error, message } = state.SearchReducers;
    return { error, message };
  };
  
  export default withRouter(connect(mapStateToProps, { SearchDetails })(Search));