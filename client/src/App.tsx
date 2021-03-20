import './App.css';

import {Component} from 'react';
import {NavHeader} from 'NavHeader';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Feed} from 'feed/Feed';
import {Home} from 'home/Home';

export class App extends Component {
  render() {
    return (
      <Router>
        <NavHeader></NavHeader>
        <Switch>
          <Route path="/feed">
            <Feed></Feed>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    );
  }
}
