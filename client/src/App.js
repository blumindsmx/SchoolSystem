import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Views/login';
import Dashboard from './Views/dashboard';
class App extends Component {
  render() {
    return  (
      <Switch>           
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Dashboard}/>
      </Switch>
    )
  }
}

export default App;