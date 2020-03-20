import React, {Component} from 'react';

class formValidation1 extends Component{
    handleChange=(e)=>{
        e.preventDefault();
        this.props.signinForm_Update({
          prop: [e.target.name],
          value: e.target.value
        });
    }
    handleSubmit = () =>{
        this.props.errorMsg({prop:'nameError',value:'Please Enter name field' })
    }
    render() {
        return (
          <div>
            <form >
            <div>
              <label>Name</label>
              <input type="text" name="name" value={this.props.name} required onChange={this.handleChange} />
              {/* {this.state.nameError ? <span style={{color: "red"}}>Please Enter name field</span> :'' } */}
              </div>
    
              <div>
              <label>Email</label>
              <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />
              {/* {this.state.emailError ? <span style={{color: "red"}}>Please Enter email field</span> :'' } */}
              </div>
    
              <div>
              <label>Password</label>
              <input type="text" name="password" value={this.props.password} onChange={this.handleChange} />
              {/* {this.state.passwordError ? <span style={{color: "red"}}>Please Enter password field</span> :'' } */}
              </div>
              
              <button type="button" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        )
      }
    
    }
    // export default formValidation;
    const mapStateToProps = (state) => {
      const { error, name, email, password } = state.SimpleFormReducers;
      return { error, name, email, password};
    };
    
    export default withRouter(connect(mapStateToProps, { signinForm_Update})(formValidation1));
    