import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Landing} from './Landing';
import {Eula} from './Eula';
import {NotFound} from './NotFound';
import {Feed} from './Feed';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/feed">
              <Feed></Feed>
            </Route>
            <Route path="/eula">
              <Eula></Eula>
            </Route>
            <Route exact path="/">
              <Landing></Landing>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
