import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import "../menu.css";

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
    <div>
      {fetching ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        listOfEvents // temporary
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Events;
