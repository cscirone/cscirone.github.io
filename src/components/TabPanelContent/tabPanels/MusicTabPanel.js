import { Select, MenuItem } from "@mui/material";
import TabPanelContent from "../TabPanelContent";
import SpotifyIFrame from "../../spotifyIframe/SpotifyIFrame";
import { useState } from "react";

function MusicTabPanel() {

    const recommendations = [
        {
            title: "Vaporwave",
            src: "https://open.spotify.com/embed/track/0PloVtYbZXVD6U7VR6tsBv?utm_source=generator&theme=0",
        },
        {
            title: "Future Funk",
            src: "https://open.spotify.com/embed/track/2FDJTo05zVmswy9x1FjlAa?utm_source=generator&theme=0",
        },
        {
            title: "Country",
            src: "https://open.spotify.com/embed/track/2PyJAiQjp1OPkow2FJZKHR?utm_source=generator&theme=0",
        },
        {
            title: "Swing",
            src: "https://open.spotify.com/embed/track/3TOGVJQaCQPE4J3JiSncwG?utm_source=generator&theme=0",
        },
        {
            title: "Trance",
            src: "https://open.spotify.com/embed/track/6bY3LFFbR70Cpt8cvvIhQb?utm_source=generator&theme=0",
        },
        {
            title: "Dubstep",
            src: "https://open.spotify.com/embed/track/1jiczAUjgZ9MF6TsYJFAxx?utm_source=generator&theme=0",
        },
        {
            title: "Electro-swing",
            src: "https://open.spotify.com/embed/track/0thLhIqWsqqycEqFONOyhu?utm_source=generator&theme=0",
        }
    ];


    const [selectedRecommendation, setSelectedRecommendation] = useState(recommendations[0]);

    return (

        <TabPanelContent>
            <p>
                Music has always been a large part of my life.
                I've played the piano and guitar since I was a teenager, and have always been a fan of rock and roll music.
                At NMSU, one class was able to expand my musical horizons beyond what I ever could have imagined.
                The class was a music history class that focused on the evolution of western music from Gregorian chants to the modern day.
                We learned about the development of musical notation, the role of religion in music, and the development of musical instruments.
                We also learned about the development of music theory, and the role of mathematics in music.
                During the class, I frequently had to go to concerts and analyze the music and the performance.
                The goal was to understand the performance, and its impact on the audience at large.
                The final for the class was to detail the history of a music genre of our choice.
                I chose to do mine on my favorite genre at the time, Vaporwave.
                I will never forget this class, as it expanded the genres of music that I listen to and enjoy to this day.
                I am now an avid listener of many genres of music, whether that be Rock, Jazz, Country, Electronic, Swing, Hip-Hop, Acapella, and more.
                Check out some recommendations below!
            </p>

            <Select
                value={selectedRecommendation.title}
                onChange={(e) => {
                    const selected = recommendations.find(rec => rec.title === e.target.value);
                    setSelectedRecommendation(selected);
                }}
            >
                {recommendations.map((recommendation) => (
                    <MenuItem key={recommendation.title} value={recommendation.title}>
                        {recommendation.title}
                    </MenuItem>
                ))}
            </Select>

            <SpotifyIFrame src={selectedRecommendation.src} />       
        </TabPanelContent>
    );
}

export default MusicTabPanel;