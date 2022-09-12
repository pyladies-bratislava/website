import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "../menu.css";

export const MeetUps = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
      });
  }, []);

  return (
    <Container>
      {events.length > 0 ? (
        events.map((event) => <div key={event.id}>{event}</div>)
      ) : (
        <div>No MeetUps</div>
      )}
    </Container>
  );
};

export default MeetUps;
