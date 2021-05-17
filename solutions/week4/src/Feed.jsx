import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export class Feed extends React.Component {
  render() {
    return (
      <div>
        <h1>The Feed</h1>
        <p>
          The feed
        </p>
        <Link to="/">Landing page</Link>
      </div>
    );
  }
}

