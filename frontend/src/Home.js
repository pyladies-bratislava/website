import React, {useState, useEffect} from 'react';
import './assets/styles/Home.css'
import './index.css'
 

function Home() {
    const [about, setAbout] = useState("About");

    useEffect(() => {
        fetch("/about").then(response => response.json()).then(data => {setAbout(data.about)})
    }, [])

    return (
        <div className="container">
            <p className="header">
              PyLadies
            </p>
            <div className="container text-justify">
              {about}
            </div>
            <div className="container">
              <blockquote class="blockquote text-right">
                <p class="mb-0 blockquote-main">The world needs women who code</p>
                <footer class="blockquote-footer">Seema Saharan <cite title="Source Title">RedHat</cite></footer>
              </blockquote>
            </div>  
        </div>
  );
}

export default Home;
