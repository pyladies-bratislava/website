import React from "react";
import { Container, Image, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SOCIAL_MEDIA_CONFIG = [
  {
    name: "Facebook",
    icon: <i className="fab fa-facebook fa-4x" aria-hidden="true" />,
    pathname: "https://www.facebook.com/groups/PyLadiesBratislava/",
  },
  {
    name: "Slack",
    icon: <i className="fab fa-slack fa-4x" aria-hidden="true" />,
    pathname: "https://pyladies.slack.com/archives/CGF33FSMD",
  },
  {
    name: "GitHub",
    icon: <i className="fab fa-github fa-4x" aria-hidden="true" />,
    pathname: "https://github.com/pyladies-bratislava",
  },
  {
    name: "Email",
    icon: <i className="fas fa-at fa-4x" aria-hidden="true" />,
    pathname: "#",
    mailto: "mailto:bratislava@pyladies.com",
  },
];

export const Contact = () => {
  return (
    <>
      <Container className="container">
        <Image
          src="/assets/jumbotron.jpeg"
          fluid
          alt="Responsive"
          width="1150"
          height="350"
        />
      </Container>
      <Container>
        <h2 className="text-center">
          We&apos;d <i className="far fa-heart" /> to help.
        </h2>
        <h5 className="text-center">
          We like to create things with fun, open minded people. <br /> Feel
          free to say hello.
        </h5>
        <Row>
          {SOCIAL_MEDIA_CONFIG.map((item) => {
            return (
              <Col key={item.name}>
                <Card border="0">
                  <Card.Body className="text-center">
                    <Link
                      className="text-dark"
                      to={{
                        pathname: item.pathname,
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (item.name === "Email") {
                          window.location = item.mailto;
                          e.preventDefault();
                        }
                      }}
                    >
                      {item.icon}
                    </Link>
                    <Card.Text className="card-text">{item.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="container text-center pt-5 pb-5">
        <h4 className="text-decorated">
          We are here to help you start learnig coding. Send us an email at
        </h4>
        <h3 className="text-decorated font-weight-bold">
          bratislava@pyladies.com
        </h3>
      </Container>
    </>
  );
};

export default Contact;
