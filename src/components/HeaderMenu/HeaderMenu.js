import React from "react";
import "./HeaderMenu.scss";

const HeaderMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>About</li>
        <li>FAQ</li>
        <li>Pricing</li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HeaderMenu;
