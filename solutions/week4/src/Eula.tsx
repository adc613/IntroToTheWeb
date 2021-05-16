import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export class Eula extends React.Component {
  render() {
    return (
      <div>
        <h1>EULA</h1>
        <p>
          Do you agree to give Coach Adam Collins and Coach Peter Koutras 50% of
          all future earnings?
        </p>
        <input type="checkbox"></input>
        <Link to="/feed">Aggree</Link>
      </div>
    );
  }
}
