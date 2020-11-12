import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
  )
}

export default App;
