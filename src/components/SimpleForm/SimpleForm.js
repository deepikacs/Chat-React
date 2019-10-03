import React, { Component } from 'react';
import './SimpleForm.css';
import { SignupDetails, signinForm_Update, getAllUsers, getByUserId } from '../../Actions/SimpleFormAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import browserHistory from '../../utils/browserHistory';
import {Link} from 'react-router-dom';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      password: this.props.password
    }

  }
  // componentWillMount(){
  //   debugger;
  // const  name=this.props.name;
  // const email=this.props.email;
  // const password=this.props.password;

  // }

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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.props.name} onChange={this.handleChange} />

          <label>Email</label>
          <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />

          <label>Password</label>
          <input type="text" name="password" value={this.props.password} onChange={this.handleChange} />

          <input type="submit" />
        </form>
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
                  <Link className="link_height" to={`${'/update/'}${item._id}` }>Edit</Link>
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
  const { error, name, email, password, getAllUserList, getUserById } = state.SimpleFormReducers;
  return { error, name, email, password, getAllUserList, getUserById };
};

export default withRouter(connect(mapStateToProps, { SignupDetails, signinForm_Update, getAllUsers, getByUserId })(SimpleForm));

// export default SimpleForm;