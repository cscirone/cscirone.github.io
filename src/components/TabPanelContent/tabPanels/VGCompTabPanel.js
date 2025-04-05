import TabPanelContent from "../TabPanelContent";
import ImageList from "../../imageList/ImageList";

import { useMediaQuery } from '@mui/material';

const images = [
    {
        src: process.env.PUBLIC_URL + '/assets/svg/Overwatch.svg',
        alt: "Overwatch Logo",
        thumbnailClassName: "w-full",
        title: "Overwatch",
        subtitle: "Blizzard Entertainment"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/deadlock.png',
        alt: "Deadlock Logo",
        thumbnailClassName: "w-full",
        title: "Deadlock",
        subtitle: "Valve Corporation"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/smash-ultimate.png',
        alt: "Super Smash Bros Ultimate Logo",
        thumbnailClassName: "w-full",
        title: "Super Smash Bros Ultimate",
        subtitle: "Nintendo"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/r6s.png',
        alt: "Rainbow Six Siege Logo",
        thumbnailClassName: "w-full bg-black p-3",
        title: "Rainbow Six Siege",
        subtitle: "Ubisoft"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/svg/counter-strike-logo.svg',
        alt: "Counter Strike 2 Logo",
        thumbnailClassName: "w-full bg-black p-3",
        title: "Counter Strike 2",
        subtitle: "Valve Corporation"
    }
]
function VGCompTabPanel() {

    const inSmallScreen = useMediaQuery('(max-width: 600px)');
    const inMediumScreen = useMediaQuery('(max-width: 900px)');
    
    return (
        <TabPanelContent>
            <p>
                I have been playing video games competitively since I was in college.
                I was a member of the NMSU Esports Overwatch team, and regularly attended Super Smash Brothers tournaments in the Las Cruces area.
                Beyond organized competition, I play competitive ranked ladders in a number of games.
                The feeling of improvement and growth that competitive games provide is something that extends beyond my hobby of gaming and into my professional and personal life.
                Below are some of my favorite competitive games:
            </p>

            <ImageList images={images} />
            
        </TabPanelContent>
    );
}

export default VGCompTabPanel;