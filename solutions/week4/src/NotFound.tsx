import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>404 page not found</h1>
        <Link to="/">The Feed</Link>
      </div>
    );
  }
}

