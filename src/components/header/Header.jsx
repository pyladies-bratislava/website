import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { MENU_LINKS } from "./Header.constants";
import { NavLink } from "../nav-link/NavLink";
import { Logo } from "../logo";

export const Header = () => {
  const handleClick = (_, index) => {
    for (const menuItem in MENU_LINKS) {
      MENU_LINKS[menuItem].isActive = index === menuItem;
    }
  };
  return (
    <div>
      <Navbar expand="lg" bg="dark" className="navbar-dark">
        <Container>
          <Logo />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {MENU_LINKS.map((link, index) => (
                <NavLink
                  path={link.path}
                  text={link.text}
                  isActive={link.isActive}
                  key={link.path}
                  onClick={(_) => handleClick(_, index)}
                />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
