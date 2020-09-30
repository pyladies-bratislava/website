import React, {useState, useEffect} from 'react';
import logo from './logo.png';
import './menu.css'

function About() {
    const [about, setAbout] = useState("About");

    useEffect(() => {
        fetch("/about").then(response => response.json()).then(data => {setAbout(data.about)})
    }, [])

    return (
        <div>
            {about}
        </div>
  );
}

export default About;
