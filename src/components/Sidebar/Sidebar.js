import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { id } = useParams();
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Main Workspace</h3>
      <ul className="sidebar__list">
        <li className="sidebar__li">
          <NavLink to={`/tailor/${id}/clients`} className="sidebar__item">
            Clients{" "}
          </NavLink>
        </li>
        <li className="sidebar__li">
          <NavLink to={`/tailor/${id}`} className="sidebar__item">
            Projects{` `}
          </NavLink>
        </li>
        <li className="sidebar__li">
          <NavLink
            to={`/tailor/${id}/project-request`}
            className="sidebar__item"
          >
            Requests{` `}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
