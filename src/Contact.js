import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonMailto from "./MailTo";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="container">
          <img
            src="/assets/jumbotron.jpeg"
            className="img-fluid"
            alt="Responsive"
            width="1150"
            height="350"
          />
        </div>
        <div className="container">
          <h1 className="text-center">
            We&apos;d <i className="far fa-heart" /> to help.
          </h1>
          <h4 className="text-center">
            We like to create things with fun, open minded people. <br /> Feel
            free to say hello.
          </h4>
          <div className="row">
            <div className="col-3">
              <div className="card border-0">
                <div className="card-body text-center">
                  <Link
                    className="text-dark"
                    to={{
                      pathname:
                        "https://www.facebook.com/groups/PyLadiesBratislava/",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook fa-4x" aria-hidden="true" />
                  </Link>
                  <p className="card-text">Facebook</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card border-0">
                <div className="card-body text-center">
                  <Link
                    className="text-dark"
                    to={{
                      pathname: "https://pyladies.slack.com/archives/CGF33FSMD",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-slack fa-4x" aria-hidden="true" />
                  </Link>
                  <p className="card-text">Slack</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card border-0">
                <div className="card-body text-center">
                  <Link
                    className="text-dark"
                    to={{ pathname: "https://github.com/pyladies-bratislava" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-4x" aria-hidden="true" />
                  </Link>
                  <p className="card-text">GitHub</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card border-0">
                <div className="card-body text-center">
                  <ButtonMailto
                    mailto="mailto:bratislava@pyladies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    label="labelWithIcon"
                  />
                  <p className="card-text">Email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center pt-5 pb-5">
          <h3 className="text-decorated">
            We are here to help you start learnig coding. Send us an email at
          </h3>
          <h2 className="text-decorated font-weight-bold">
            bratislava@pyladies.com
          </h2>
        </div>
      </>
    );
  }
}

export default Contact;
