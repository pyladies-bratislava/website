import React from "react";
import { Link } from "react-router-dom";

const labelWithIcon = (
  <i className="fas fa-at fa-4x text-dark" aria-hidden="true" />
);

function ButtonMailto({ mailto }) {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {labelWithIcon}
    </Link>
  );
}

export default ButtonMailto;
