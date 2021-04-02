import {Component} from 'react';
import {Link} from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Intro to Web Development Social Media site</h1>
        <h2>Proceed to the <Link to="/feed">feed</Link></h2>
      </div>
    );
  }
}
