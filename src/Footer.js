import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid py-5 bg-dark text-white">
        <div className="container-fluid text-center">
          <small>
            Copyright &copy; Designed with <i className="far fa-heart" /> by
            PyLadies Bratislava
          </small>
        </div>
      </footer>
    );
  }
}

export default Footer;
