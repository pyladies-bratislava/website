import React, { useState, useEffect } from 'react';


function About() {
    const [about, setAbout] = useState([]);
    const [fetching, setFetching] = useState(false)
    const [error, setError] = useState("")
    const api_base_url = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        fetchAboutData()
    }, [])

    const fetchAboutData = async () => {
        setFetching(true)
        try {
            const response = await fetch(api_base_url + "about")
            const data = await response.json()
            setAbout(data.about)
            setFetching(false)
        }
        catch (e) {
            setFetching(false)
            setError(e)
        }
    }

    return (
        <div>
            {
                fetching ? (
                    <div class="spinner-border text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                ) : about
            }
            {
                error && (
                    <div class="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                )
            }
        </div>
    );
}

export default About;
