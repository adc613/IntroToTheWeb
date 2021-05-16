import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Landing} from './Landing';
import {Eula} from './Eula';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/eula">
              <Eula></Eula>
            </Route>
            <Route path="/">
              <Landing></Landing>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
