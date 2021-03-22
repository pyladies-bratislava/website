import React, {useState, useEffect} from 'react';
import './menu.css'

function Events() {
    const [events, setEvents] = useState("Events");
    const api_base_url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        fetch(api_base_url + "events").then(response => response.json()).then(data => {setEvents(data.events)})
    }, [])

    return (
        <div>
            {events}
        </div>
  );
}

export default Events;
