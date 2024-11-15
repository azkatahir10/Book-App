import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">BookApp</Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
