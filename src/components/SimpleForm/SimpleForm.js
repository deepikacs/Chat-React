import React, { Component } from 'react';
import './SimpleForm.css';
import { SignupDetails, signinForm_Update, getAllUsers, getByUserId } from '../../Actions/SimpleFormAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import browserHistory from '../../utils/browserHistory';
import { Link } from 'react-router-dom';
// var Spinner = require('react-spinkit');
import Loadable from 'react-loading-overlay';


class SimpleForm extends Component {


  componentDidMount() {
    this.props.getAllUsers();
  }
  handleChange = (e) => {
    this.props.signinForm_Update({
      prop: [e.target.name],
      value: e.target.value
    });

    e.preventDefault();

  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      Name: this.props.name,
      email: this.props.email,
      password: this.props.password
    }

    this.props.SignupDetails(data);
    this.props.getAllUsers();
  }


  render() {
    console.log(this.props.loading);
    return (

      <div>

        <Loadable
          active={this.props.loading1}
          spinner
          text='Loading..'
          style={{ position: 'static' }}
        >
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.props.name} onChange={this.handleChange} />

            <label>Email</label>
            <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />

            <label>Password</label>
            <input type="text" name="password" value={this.props.password} onChange={this.handleChange} />

            <input type="submit" />
          </form>
        </Loadable>
        {/* {this.props.loading?
        <Spinner name='double-bounce' /> :''} */}

        <h3>{this.props.formSubmitMsg}</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.getAllUserList.map((item, index) =>
              (
                <tr>
                  <td>{item.Name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  {/* <button type="text" onClick={(e) => { this.updateBtn(e, item._id) }} >update</button> */}
                  <Link className="" to={`${'/update/'}${item._id}`}>Edit</Link>
                </tr>
              ))}
          </tbody>

        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  console.log(state.SimpleFormReducers)
  const { error, name, email, password, getAllUserList, getUserById, formSubmitMsg, loading1 } = state.SimpleFormReducers;
  return { error, name, email, password, getAllUserList, getUserById, formSubmitMsg, loading1 };
};

export default withRouter(connect(mapStateToProps, { SignupDetails, signinForm_Update, getAllUsers, getByUserId })(SimpleForm));

// export default SimpleForm;