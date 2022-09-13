import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PYLADIES_EMAIL } from "../../constants/index";

export const SocialMediaItem = ({ item }) => {
  return (
    <Col>
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
                window.location = `mailto:${PYLADIES_EMAIL}`;
                e.preventDefault();
              }
            }}
          >
            {item.icon}
          </Link>
          <Card.Text>{item.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
