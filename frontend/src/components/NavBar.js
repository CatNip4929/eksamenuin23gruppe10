import React from "react";
import logo from "../images/macslogo_white.png";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <a href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul>
        <li>
          <a href="#">My Games</a>
          <a href="#">My Favourites</a>
          <a href="#">Game Shop</a>
        </li>
      </ul>
    </nav>
  );
}
