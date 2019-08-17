import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import Dashboard from '../Dashboard';
import Chat from '../Chat';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/chat' component={Chat}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
