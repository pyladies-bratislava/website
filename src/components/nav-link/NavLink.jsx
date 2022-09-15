import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ path, text, isActive, onClick, key }) => {
  return (
    <li key={key} className={`nav-item ${isActive ? "active" : ""}`}>
      <Link className="nav-link" to={path} onClick={() => onClick()}>
        {text}
      </Link>
    </li>
  );
};
