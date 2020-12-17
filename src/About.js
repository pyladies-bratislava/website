import React, {useState, useEffect} from 'react';
 

function About() {
    const [about, setAbout] = useState("About");
    const api_base_url = "https://bratislava-flask-backend.herokuapp.com/about"

    useEffect(() => {
        fetch(api_base_url).then(response => response.json()).then(data => {setAbout(data.about)})
    }, [])

    return (
        <div>
            {about}
        </div>
  );
}

export default About;
