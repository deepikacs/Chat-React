import React, { Component } from 'react';
import { getByUserId,signinForm_Update,updateFunction } from '../../Actions/SimpleFormAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UpdateForm extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        // let {userid} = this.props.match.params;
        // this.props.getByUserId(userid);
        // if (this.props.getUserById) {
        //     this.props.signinForm_Update({prop:'name',value: this.props.getUserById.Name});
        //     this.props.signinForm_Update({prop:'email',value: this.props.getUserById.email});
        //     this.props.signinForm_Update({prop:'password',value: this.props.getUserById.password});
      
        //   }


        if (this.props.data) {
            this.props.signinForm_Update({prop:'name',value: this.props.data.Name});
            this.props.signinForm_Update({prop:'email',value: this.props.data.email});
            this.props.signinForm_Update({prop:'password',value: this.props.data.password});
      
          }
    }
    handleChange = (e) => {
        this.props.signinForm_Update({
          prop: [e.target.name],
          value: e.target.value
        });
    
        e.preventDefault();
    
      }
    handleUpdate = () =>{
    let updatedata={id:this.props.data._id,name:this.props.name,email:this.props.email,password:this.props.password}
   this.props.updateFunction(updatedata);    
}
    render() {
        return (
            <div>
                 <form >
          <label>Name</label>
          <input type="text" name="name" value={this.props.name} onChange={this.handleChange} />

          <label>Email</label>
          <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />

          <label>Password</label>
          <input type="text" name="password" value={this.props.password} onChange={this.handleChange} />

            <button type="button" onClick={this.handleUpdate}>Update</button>
        </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    debugger;
    const { error, name, email, password, getUserById } = state.SimpleFormReducers;
    return { error, name, email, password,getUserById };
  };
  
  export default withRouter(connect(mapStateToProps, { getByUserId,signinForm_Update,updateFunction })(UpdateForm));