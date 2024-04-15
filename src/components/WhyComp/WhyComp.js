import React from "react";
import { useNavigate } from "react-router-dom";

import "./WhyComp.scss";

const WhyComp = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <div className="why">
      <h2 className="why__title">Why Provogue?</h2>
      <ul className="why__list">
        <li className="why__li">
          Tailor-Made Solutions: Designed specifically for tailors to streamline
          operations and enhance efficiency.
        </li>
        <li className="why__li">
          Client-Centric Approach: Prioritizing client satisfaction through
          seamless communication and exceptional service delivery.
        </li>
        <li className="why__li">
          Simplified Workflow: Say goodbye to paperwork and administrative
          hassles, and focus on what you do best – creating beautiful garments.
        </li>
      </ul>
      <button className="why__btn" onClick={handleButtonClick}>
        SIGN UP
      </button>
    </div>
  );
};

export default WhyComp;
