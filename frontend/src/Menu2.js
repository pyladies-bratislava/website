import React from 'react';
import './menu2.css';
import * as ReactBootStrap from "react-bootstrap";

function Menu2() {
    return (
    <div className="Menu2">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">PyLadies Bratislava</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#features">About Us</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Meetups</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Voting</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#deets">Sign In</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Sign Up
            </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    </div>
    );
}

export default Menu2;