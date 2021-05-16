import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Puppys!</h1>
        <Link to="/eula">Welcome to Puppys!</Link>
      </div>
    );
  }
}
