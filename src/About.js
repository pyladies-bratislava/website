import React, {useState, useEffect} from 'react';
 

function About() {
    const [about, setAbout] = useState("About");
    const api_base_url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        fetch(api_base_url + "about").then(response => response.json()).then(data => {setAbout(data.about)})
    }, [])

    return (
        <div>
            {about}
        </div>
  );
}

export default About;
