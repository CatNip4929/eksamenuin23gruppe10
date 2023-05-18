import React, { useState } from "react";
import logo from "../images/macslogo_white.png";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";

export default function NavBar({ user, handleLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleLogoutClick = () => {
    handleLogout();
    setIsDropdownOpen(false);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="nav-bar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/mygames">
              My Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/myfavorite">
              My Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/gameshop">
              Gameshop
            </NavLink>
          </li>
          <li className="dropdown">
            {user ? (
              <>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                  {user.user_name}
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/profile">Profil</NavLink>
                    </li>
                    <li>
                      <button onClick={handleLogoutClick}>Logg ut</button>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <button className="login-button" onClick={handleLoginClick}>
                Logg inn
              </button>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
