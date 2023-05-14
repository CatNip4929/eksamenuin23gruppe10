import React from "react";
import logo from "../images/macslogo_white.png";

import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/mygames" activeClassName="active">
              My Games
            </Link>
          </li>
          <li>
            <Link to="/myfavorites" activeClassName="active">
              My Favorites
            </Link>
          </li>
          <li>
            <Link to="/gameshop" activeClassName="active">
              Gameshop
            </Link>
          </li>
          <li>
            <Link to="/login">Login </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
