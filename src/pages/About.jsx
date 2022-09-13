import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { API_BASE_URL } from "../constants";

export const About = () => {
  const [about, setAbout] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const fetchAboutData = async () => {
    setFetching(true);
    try {
      const response = await fetch(`${API_BASE_URL}about`);
      const data = await response.json();
      setAbout(data.about);
      setFetching(false);
    } catch (e) {
      setFetching(false);
      setError(e);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <Container>
      {fetching ? (
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
      ) : (
        about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}
    </Container>
  );
};

export default About;
