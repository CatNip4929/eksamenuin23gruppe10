import React from 'react';
import logo from '../images/macslogo_white.png';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#" className="logo">
            <img src={logo} alt="Logo" />
          </a>
        </li>
        <li>
          <a href="#">My Games</a>
        </li>
        <li>
          <a href="#">My Favourites</a>
        </li>
        <li>
          <a href="#">Game Shop</a>
        </li>
      </ul>
    </nav>
  );
}
