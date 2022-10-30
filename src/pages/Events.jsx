import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";

import { API_BASE_URL } from "../constants";
import { Loader } from "../components/loader/Loader";

export const Events = () => {
  const [listOfEvents, setListOfEvents] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const fetchEventsData = async () => {
    setFetching(true);
    try {
      const response = await fetch(`${API_BASE_URL}events`);
      const { events } = await response.json();
      if (events.length === 0) {
        setListOfEvents("No events found");
      } else {
        setListOfEvents(events);
      }
      setFetching(false);
    } catch (e) {
      setFetching(false);
      setError(e);
    }
  };

  useEffect(() => {
    fetchEventsData();
  }, []);

  return (
    <Container>
      {fetching ? (
        <Loader />
      ) : (
        JSON.stringify(listOfEvents) // temporary
      )}
      {error && <Alert variant="danger">{error.message}</Alert>}
    </Container>
  );
};

export default Events;
