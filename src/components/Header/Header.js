import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Import useNavigate hook
import "./Header.scss";
import userIcon from "../../assets/icons/icon-user.png";
import logout from "../../assets/icons/icon-logout.png";
import menu from "../../assets/icons/icon-menu.png";
import HeaderMenu from "../HeaderMenu/HeaderMenu.js"; // Import HeaderMenu component

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    // Add your sign out logic here
    console.log("Signing out...");
  };

  return (
    <header className="header">
      <h3 className="header__title">
        <NavLink to="/" className="navlinks__title">
          Provogue
        </NavLink>
      </h3>
      <section className="header__items">
        <ul className="header__list">
          <li className="list__text">
            <NavLink to="/" className="navlinks__text">
              About
            </NavLink>
          </li>
          <li className="list__text">
            <NavLink to="/redirect-tailor" className="navlinks__text">
              Tailor
            </NavLink>
          </li>
          <li className="list__text">
            <NavLink to="/" className="navlinks__text">
              Client
            </NavLink>
          </li>
        </ul>
        <div className="header__dropdown">
          <img
            src={userIcon}
            alt="user icon"
            className="header__icon"
            onClick={handleIconClick}
          />
          {isDropdownOpen && (
            <ul className="header__dropdown-menu">
              <li className="header__dropdown-item" onClick={handleSignOut}>
                <div className="header__signout">
                  <img src={logout} alt="logout" className="header__icon" />
                  <p className="header__text">Sign Out</p>
                </div>
              </li>
            </ul>
          )}
        </div>
        <div className="header__dropdown menu">
          <img
            src={menu}
            alt="menu icon"
            className={`header__icon ${!isMenuOpen ? "hidden" : ""}`}
            onClick={handleMenuClick}
          />
          {/* Conditionally render the HeaderMenu component */}
          {isMenuOpen && (
            <HeaderMenu isOpen={isMenuOpen} onClose={handleMenuClick} />
          )}
        </div>
      </section>
    </header>
  );
}

export default Header;
