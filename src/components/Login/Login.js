import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Login.css';
import { submitLogin } from '../../Actions/LoginAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: { username: '', password: '' },
      formValid: false,
      usernameValid: false,
      passwordValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserLoginForm = this.submituserLoginForm.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.ValidateField(name, value) });
  }

  ValidateField(fieldname, value) {
    let fieldValidationError = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldname) {
      case 'username':
      usernameValid = value.match(/^[a-zA-Z ]*$/);
        fieldValidationError.username = usernameValid ? '' : 'username contains alphabets';
        break;
      
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationError,
      usernameValid: usernameValid,
      passwordValid: passwordValid
    }, this.validateForm);

  }

  validateForm() {
    this.setState({ formValid: this.state.usernameValid });
  }

  errorClass(error) {
    if (error) {
      return (error.length === 0 ? '' : 'brder-red');
    }
    else {
      return ('');
    }
  }

  submituserLoginForm(e) {
    debugger;
    e.preventDefault();
    const loginDetails = {username: this.state.username, password: this.state.password };
    this.props.submitLogin(loginDetails);
  }

 


  render() {
    return (
      <React.Fragment>
        <div className="div-align">
          <center><h3>Login page</h3></center>
          <form method="" name="" onSubmit={this.submituserLoginForm} >

            <label>USERNAME:</label>
            <input type="text" required className={` ${this.errorClass(this.state.formErrors.username)}`} name="username" value={this.state.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.username}</div>

            <label>Password</label>
            <input type="password" required className={`${this.errorClass(this.state.formErrors.password)}`} name="password" value={this.state.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.formErrors.passwordValid}</div>

            <input type="submit" className="button" value="LOGIN" disabled={!this.state.formValid} />
          <h5>Don't have an account ? <a href='/signup'>Signup</a></h5>
          </form>
          <center><div className="errorMsg">{this.props.message}</div></center>
        <center><div className="errorMsg">{this.props.error}</div></center>
        </div>



      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => {
  const { error, message } = state.LoginReducers;
  return { error, message};
};

export default withRouter(connect(mapStateToProps, { submitLogin })(Login));