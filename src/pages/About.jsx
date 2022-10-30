import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";

import { Loader } from "../components/loader/Loader";
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
        <Loader />
      ) : (
        about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
      )}
      {error && <Alert variant="danger">There is an error</Alert>}
    </Container>
  );
};

export default About;
