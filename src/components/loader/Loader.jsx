import React from "react";
import { Container, Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <Container className="overlay d-flex justify-content-center align-items-center min-vh-100">
      <Spinner
        role="status"
        animation="border"
        variant="info"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};
