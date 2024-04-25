import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import useNavigate hook
import "./Header.scss";
import userIcon from "../../assets/icons/icon-user.png";
import logout from "../../assets/icons/icon-logout.png";
import menu from "../../assets/icons/icon-menu.png";
import HeaderMenu from "../HeaderMenu/HeaderMenu.js"; // Import HeaderMenu component

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <NavLink to="/about" className="navlinks__text">
              About
            </NavLink>
          </li>
          <li className="list__text">
            <NavLink to="/login" className="navlinks__text">
              Tailor
            </NavLink>
          </li>
          <li className="list__text">
            <NavLink to="/client-login" className="navlinks__text">
              Client
            </NavLink>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
