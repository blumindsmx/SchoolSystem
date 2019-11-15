import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <h2>holaaa</h2>
          {/*          Login              /
          <Route exact path='/' component={Login} />

          {/*          Errores              / 
         7 <Route component={NOTFOUND} />
*/}
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;