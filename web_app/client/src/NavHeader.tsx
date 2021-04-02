import {Component} from 'react';
import {Link} from 'react-router-dom';

export class NavHeader extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/feed">My feed</Link></li>
        </ul>
      </nav>
    );
  }
}
