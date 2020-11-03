import React, {useState, useEffect} from 'react';
 

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
<<<<<<< HEAD

=======
>>>>>>> e5ea8733742eac9d7e875510dc6f079a106f0abb
