import React from "react";
import logo from "../images/macslogo_white.png";

import { NavLink, Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/mygames" activeClassName="active">
              My Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/myfavorite" activeClassName="active">
              My Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/gameshop" activeClassName="active">
              Gameshop
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
