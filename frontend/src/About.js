import React, {useState, useEffect} from 'react';
 

function About() {
    const [about, setAbout] = useState("About");

    useEffect(() => {
        fetch("/About").then(response => response.json()).then(data => {setAbout(data.about)})
    }, [])

    return (
        <div>
            {about}
        </div>
  );
}

export default About;
