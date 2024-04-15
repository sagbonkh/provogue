import React from "react";
import "./HeaderMenu.scss";

const HeaderMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>About</li>
        <li>Tailor</li>
        <li>Client</li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HeaderMenu;
