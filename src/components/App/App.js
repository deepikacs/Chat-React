import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import Dashboard from '../Dashboard';
import Chat from '../Chat';

// use whenever you want private route
const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route exact {...rest} render={(props) => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />
    } else {
      return <Redirect to='/' />
    }
  }
  } />
 }
class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path='/chat' component={Chat}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
