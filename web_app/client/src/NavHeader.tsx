import {Component} from 'react';
import {Link} from 'react-router-dom';
import homeIcon from './icons/home.png';
import listIcon from './icons/list.png';

export class NavHeader extends Component {
  render() {
    return (
      <nav>
          <Link to="/">
            <button className="navButton">
              <img src = {homeIcon} width="20" height="20" id="homeIcon"/>Home
            </button>
          </Link>
          <Link to="/feed">
            <button className="navButton">
              <img src = {listIcon} width="20" height="20" id="listIcon"/>My feed
            </button>
          </Link>
      </nav>
    );
  }
}
