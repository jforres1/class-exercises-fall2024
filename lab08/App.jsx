import React, {useState} from "react";
import { Carousel, Button, Input } from 'antd';

export default function App() {

    const [artist, setArtist] = useState('');
    const [limit, setLimit] = useState(20);
    const [tracks, setTracks] = useState([]);

    const contentStyle = {
        "width": "640px", 
        "border": "solid 1px #000", 
        "margin": "auto"
    };

    function trackToJSX(trackJSON){
        const src_url = "https://open.spotify.com/embed/track/" + trackJSON.id + "?utm_source=generator" 
        return (
            <iframe
                src={src_url}
                width="100%" 
                border="0"
                height="352" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>
        )
    }

    async function getServerData(artist, limit) {
        const base_url = "https://www.apitutor.org/spotify/simple/v1/search";
        const extended_url = base_url + "?=" + artist + "&type=track&limit=" + limit;
        const response = await fetch(extended_url);
        const data = await response.json();
        setTracks(data);
    }

    return (
        <>
            <Input
                value={artist}
                onChange={e => setArtist(e.target.value)} />
            <Input
                value={limit}
                onChange={e => setLimit(e.target.value)} />
            <Button onClick={getServerData(artist, limit)}>
                Submit
            </Button>
            <div style={contentStyle}>
                <Carousel dotPosition="top">
                    {tracks.map(trackToJSX)}
                </Carousel>
            </div>
        </>
    );
}
