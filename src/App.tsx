import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainWindow from './components/mainWindow';
import SignIn from './components/SignIn';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/chat" component={MainWindow} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
