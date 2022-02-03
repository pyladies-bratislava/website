import React, { useState, useEffect } from "react";
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
    <div>
      {fetching ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        about
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default About;
