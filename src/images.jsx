import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
export default function Images() {

  // Purana code

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://www.eporner.com/api/v2/video/search/?query&per_page=7&page=1&thumbsize=big&order=top-weekly&gay=0&lq=1&format=json")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    
    if (loading) {
        return (
            <div>loading</div>
        )
    }

    if (error) {
        return (
            <div>and error has occured</div>
        )
    }

    return (
        <>
            {data.videos.map((video) => (

                <div id={video.id + "-container"} key={video.id} className="">
                    <iframe src={video.embed} frameborder="0" allowFullScreen></iframe>
                </div>
            ))}
        </>
    )
}