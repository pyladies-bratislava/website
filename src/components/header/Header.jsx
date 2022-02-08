import { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "../nav-link/NavLink";
import logo from "../../assets/pyladies-head_black.png";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: "/About", text: "About Us", isActive: false },
        { path: "/MeetUps", text: "MeetUps", isActive: false },
        { path: "/Events", text: "Events", isActive: false },
        { path: "/3", text: "Stories", isActive: false },
        { path: "/Contact", text: "Contact", isActive: false },
      ],
    };
  }

  handleClick(i) {
    const links = this.state;
    for (const j in links) {
      links[j].isActive = i === j;
    }
    this.setState({ ...links });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
          <Link className="navbar-brand" to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            PyLadies Bratislava
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-toggle"
            aria-controls="nav-content"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbar-toggle">
            <ul className="navbar-nav mr-auto">
              {this.state.links.map((link, i) => (
                <NavLink
                  path={link.path}
                  text={link.text}
                  isActive={link.isActive}
                  key={link.path}
                  onClick={() => this.handleClick(i)}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
