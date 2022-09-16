import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export const Home = () => {
  return (
    <Card>
      <Card.Body>
        Pyladies Bratislava&apos;s Website vision is to become a lab for
        experimenting, not only using Python but also other languages and
        frameworks. By calling it a lab we want to give the freedom for everyone
        to experiment with anything. The one and only rule is{" "}
        <Badge pill bg="success" text="light">
          {" "}
          it has to work{" "}
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default Home;
