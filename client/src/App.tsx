import React from 'react';
import './App.css';
import NavHeader from './NavHeader';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavHeader></NavHeader>
      <Switch>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
        <Route path="/feed">
          <h1>Feed</h1>
        </Route>
        <Route path="/post">
          <h1>Post</h1>
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
