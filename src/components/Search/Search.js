import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {SearchDetails} from '../../Actions/SearchAction';
import {userInformation,dynamicColor} from '../../Actions/SignupAction';
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);
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
changeColor=(id)=>{

   this.props.result.forEach((item,i)=>{
       if(i==id){
        this.props.result[id].color="#0000ff";
       }
       else{
        this.props.result[i].color=null;
       }
   
    this.props.dynamicColor(this.props.result);
    
   })

}
    render() {
        return (
            <div>
                <center> <input type="text" name="search" onChange={e => this.setState({ searchState: e.target.value })} value={this.state.searchState} />
                <button onClick={this.SearchName} >Search</button></center>
           {this.props.result.map((item,index)=>{
               return <div  className="box-align" style={{background:item.color}} key={index} 
               onClick={(e)=>{this.handleClick(e,item.username);this.changeColor(index)} }
            //    onMouseEnter={this.changeColor(item._id)}
               >{item.username}</div>
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
  
  export default withRouter(connect(mapStateToProps, { SearchDetails,userInformation,dynamicColor})(Search));