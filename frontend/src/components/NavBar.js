import React from "react";
import logo from "../images/macslogo_white.png";
import { Link, Outlet } from "react-router-dom"

export default function NavBar() {
  return (
    <>
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
        </Link>
      <ul>
        <li>
        <Link to="/mygames">My Games</Link>        
        </li>
        <li>
        <Link to="/myfavorites">My Favorites</Link>        
        </li>
        <li>
        <Link to="/gameshop">Gameshop</Link>        
        </li>
      </ul>
    </nav>
     <Outlet />
     </>
  );
}
