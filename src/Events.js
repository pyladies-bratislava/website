import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import './menu.css'

function Events() {
    const [events, setEvents] = useState("Events");

    useEffect(() => {
        fetch("/events").then(response => response.json()).then(data => {setEvents(data.events)})
    }, [])

    return (
        <div>
            {events}
        </div>
  );
}

export default Events;
