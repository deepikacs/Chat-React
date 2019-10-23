import React, { Component } from 'react';
import { signinForm_Update} from '../../Actions/SimpleFormAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class formValidation extends Component {
  // handleSubmit=this.handleSubmit.bind(this);
  state={
    nameError:false,
    emailError:false,
    passwordError:false,
  }

  validateFunc =()=>{
    let validate=true;
    this.setState({
      nameError:false,
    emailError:false,
    passwordError:false,
    })
    

    if(this.props.name ==='' || this.props.name===null){
      this.setState({
        nameError:true
      })
      validate=false;
    }
    if(this.props.email ==='' || this.props.email===null){
      this.setState({
        emailError:true
      })
      validate=false;
    } 
    if(this.props.password ==='' || this.props.password===null){
      this.setState({
        passwordError:true
      })
      validate=false;
    } 
    return validate;

  }

  handleChange=(e)=>{
    e.preventDefault();
    this.props.signinForm_Update({
      prop: [e.target.name],
      value: e.target.value
    });



    
// // validation
// if(e.target.name==='name'){
//   if(e.target.value ==='' || e.target.value===null){
//     this.setState({
//       nameError:true
//     })
//   } else {
//     this.setState({
//       nameError:false
//     })
//   }
// }

// if(e.target.name==='email'){
//   if(e.target.value==='' || e.target.value===null ){
//     this.setState({
//       emailError:true
//     })
//   } else {
//     this.setState({
//       emailError:false
//     })
//   }
// }

// if(e.target.name==='password'){
//   if(e.target.value==='' || e.target.value===null ){
//     this.setState({
//       passwordError:true
//     })
//   } else {
//     this.setState({
//       passwordError:false
//     })
//   }
// }

}




  

handleSubmit=(e)=>{
  if(this.validateFunc()){
    console.log("form submitted");
  }



  }

  render() {
    return (
      <div>
        <form >
        <div>
          <label>Name</label>
          <input type="text" name="name" value={this.props.name} required onChange={this.handleChange} />
          {this.state.nameError ? <span style={{color: "red"}}>Please Enter name field</span> :'' }
          </div>

          <div>
          <label>Email</label>
          <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />
          {this.state.emailError ? <span style={{color: "red"}}>Please Enter email field</span> :'' }
          </div>

          <div>
          <label>Password</label>
          <input type="text" name="password" value={this.props.password} onChange={this.handleChange} />
          {this.state.passwordError ? <span style={{color: "red"}}>Please Enter password field</span> :'' }
          </div>
          
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }

}
// export default formValidation;
const mapStateToProps = (state) => {
  const { error, name, email, password, getUserById } = state.SimpleFormReducers;
  return { error, name, email, password,getUserById };
};

export default withRouter(connect(mapStateToProps, { signinForm_Update})(formValidation));



// // backup
// import React, { Component } from 'react';
// import { signinForm_Update} from '../../Actions/SimpleFormAction';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// class formValidation extends Component {
//   state={
//     nameError:false,
//     emailError:false,
//     passwordError:false
//   }

//   handleChange=(e)=>{
//     debugger;
//     e.preventDefault();
//     this.props.signinForm_Update({
//       prop: [e.target.name],
//       value: e.target.value
//     });



    
// // validation
// if(e.target.name==='name'){
//   if(e.target.value ==='' || e.target.value===null){
//     this.setState({
//       nameError:true
//     })
//   } else {
//     this.setState({
//       nameError:false
//     })
//   }
// }

// if(e.target.name==='email'){
//   if(e.target.value==='' || e.target.value===null ){
//     this.setState({
//       emailError:true
//     })
//   } else {
//     this.setState({
//       emailError:false
//     })
//   }
// }

// if(e.target.name==='password'){
//   if(e.target.value==='' || e.target.value===null ){
//     this.setState({
//       passwordError:true
//     })
//   } else {
//     this.setState({
//       passwordError:false
//     })
//   }
// }

// }




  

// handleSubmit=()=>{
//   debugger;
// if(this.props.name ==='' || this.props.name===null){
//     this.setState({
//       nameError:true
//     })
//   }
//   if(this.props.email ==='' || this.props.email===null){
//     this.setState({
//       emailError:true
//     })
//   } 
//   if(this.props.password ==='' || this.props.password===null){
//     this.setState({
//       passwordError:true
//     })
//   } 

//     if(this.state.nameError === false && this.state.emailError === false && this.state.passwordError === false && this.props.name==! '' && this.props.email ==! '' && this.props.password ==! ''){
//       console.log("form submitted");
//     }
//     else{
//       console.log("error");
//     }

//   }

//   render() {
//     return (
//       <div>
//         <form >
//         <div>
//           <label>Name</label>
//           <input type="text" name="name" value={this.props.name} required onChange={this.handleChange} />
//           {this.state.nameError ? <span style={{color: "red"}}>Please Enter name field</span> :'' }
//           </div>

//           <div>
//           <label>Email</label>
//           <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />
//           {this.state.emailError ? <span style={{color: "red"}}>Please Enter email field</span> :'' }
//           </div>

//           <div>
//           <label>Password</label>
//           <input type="text" name="password" value={this.props.password} onChange={this.handleChange} />
//           {this.state.passwordError ? <span style={{color: "red"}}>Please Enter password field</span> :'' }
//           </div>
          
//           <button type="button" onClick={this.handleSubmit}>Submit</button>
//         </form>
//       </div>
//     )
//   }

// }
// // export default formValidation;
// const mapStateToProps = (state) => {
//   debugger;
//   const { error, name, email, password, getUserById } = state.SimpleFormReducers;
//   return { error, name, email, password,getUserById };
// };

// export default withRouter(connect(mapStateToProps, { signinForm_Update})(formValidation));



