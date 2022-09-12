import React from "react";
import { Link } from "react-router-dom";

export const ButtonMailTo = ({ mailto }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      <i className="fas fa-at fa-4x text-dark" aria-hidden="true" />
    </Link>
  );
};
