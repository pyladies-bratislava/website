import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pyladies-head_black.png";

export const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img
        alt="logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{" "}
      PyLadies Bratislava
    </Link>
  );
};
