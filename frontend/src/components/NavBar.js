import React, { useState } from "react";
import logo from "../images/macslogo_white.png";
import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function NavBar({ user, handleLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  //Funksjon for åpning og lukking av dropdownmeny
  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };
//Håndterer logout funksjon
  const handleLogoutClick = () => {
    handleLogout();
    setIsDropdownOpen(false);
  };
//Navigasjon for loginn knapp
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
            <NavLink to="/mygames" activeclassname="active">
              My Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" activeclassname="active">
              My Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/gameshop" activeclassname="active">
              Gameshop
            </NavLink>
          </li>
          <li className="dropdown">
            {user ? (
              <>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                  {user.user_name}<FontAwesomeIcon className="profile-icon" icon={faUser} />
                </button>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <button className="login-button" onClick={handleLogoutClick}>Logg ut</button>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <button className="login-button" onClick={handleLoginClick}>
                Logg inn <FontAwesomeIcon className="profile-icon" icon={faUser} />
              </button>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
