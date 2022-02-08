import React from "react";
import { Link } from "react-router-dom";

export class NavLink extends React.Component {
  render() {
    return (
      <li className={`nav-item ${this.props.isActive ? "active" : ""}`}>
        <Link
          className="nav-link"
          to={this.props.path}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </Link>
      </li>
    );
  }
}
