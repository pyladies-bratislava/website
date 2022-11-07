import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { API_BASE_URL } from "../constants";
import { Loader } from "../components/loader/Loader";
import { EventCard } from "../components/event-card";
import { sortArrayByDate } from "../utils";

export const Events = () => {
  const [listOfEvents, setListOfEvents] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const isNoData = !fetching && listOfEvents.length === 0;

  const fetchEventsData = async () => {
    setFetching(true);
    try {
      const response = await fetch(`${API_BASE_URL}events`);
      const { events } = await response.json();
      if (events.length === 0) {
        setListOfEvents([]);
      } else {
        const sortedByDateArray = sortArrayByDate(events);
        setListOfEvents(sortedByDateArray);
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
      {fetching && <Loader />}
      {isNoData && <div>No Events</div>}
      <Row xs={1} md={3} className="g-4">
        {listOfEvents.length > 0 &&
          listOfEvents.map((event) => {
            return (
              <Col key={event.created}>
                <EventCard
                  title={event.summary}
                  description={event.description}
                  startDate={event.start.dateTime}
                />
              </Col>
            );
          })}
      </Row>
      {error && <Alert variant="danger">{error.message}</Alert>}
    </Container>
  );
};

export default Events;
