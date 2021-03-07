import React from 'react';
import {Link} from 'react-router-dom';

function NavHeader() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">My profile</Link></li>
        <li><Link to="/feed">My feed</Link></li>
        <li><Link to="/post">Create post</Link></li>
      </ul>
    </nav>
  );
}

export default NavHeader;
