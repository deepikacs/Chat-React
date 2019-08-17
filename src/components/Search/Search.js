import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {SearchDetails} from '../../Actions/SearchAction';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            searchState:''
        };
    }

   
    SearchName=()=>{
      
        this.props.SearchDetails(this.state.searchState);
    }
    render() {
        return (
            <div>
                 <input type="text" name="search" onChange={e => this.setState({ searchState: e.target.value })} value={this.state.searchState} />
                <button onClick={this.SearchName} >Search</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { error, message } = state.SearchReducers;
    return { error, message };
  };
  
  export default withRouter(connect(mapStateToProps, { SearchDetails })(Search));