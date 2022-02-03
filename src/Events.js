import React, { useState, useEffect } from "react";
import "./menu.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");
  const api_base_url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    setFetching(true);
    try {
      const response = await fetch(`${api_base_url}events`);
      const { events } = await response.json();
      if (events.length === 0) {
        setEvents("No events found");
      } else {
        setEvents(events);
      }
      setFetching(false);
    } catch (e) {
      setFetching(false);
      setError(e);
    }
  };

  return (
    <div>
      {fetching ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        events
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default Events;
