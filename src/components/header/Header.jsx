import { Link } from "react-router-dom";
import { MENU_LINKS } from "./Header.constants";
import { NavLink } from "../nav-link/NavLink";
import logo from "../../assets/pyladies-head_black.png";

export const Header = () => {
  const handleClick = (_, index) => {
    for (const menuItem in MENU_LINKS) {
      MENU_LINKS[menuItem].isActive = index === menuItem;
    }
  };
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
            {MENU_LINKS.map((link, index) => (
              <NavLink
                path={link.path}
                text={link.text}
                isActive={link.isActive}
                key={link.path}
                onClick={(_) => handleClick(_, index)}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
