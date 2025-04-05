import TabPanelContent from "../TabPanelContent";
import { Button } from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";

import ImagePreview from "../../imagePreview/ImagePreview";

function EsportsTabPanel() {
    return (
        <TabPanelContent>
            <p>
                The year is 2016, and a video game called <i><strong>Overwatch</strong></i> is released.
                I was a casual player of <i><strong>Overwatch</strong></i>, playing with my friends and my brother in my free time.
                After playing the game for a few months, I heard about a budding esports club at NMSU, and I went to the first meeting.
                I was able to make the team, and we were able to compete in a number of events, including the collegiate league known as <i><strong>Tespa</strong></i>.
                I played Utility Support for the team, mainly playing <i><strong>Zenyatta</strong></i>, <i><strong>Ana</strong></i>, and <i><strong>Brigitte</strong></i>.
                We performed very well in the Tespa Collegiate Series for an orgnization without extensive University support.
            </p>

            <ImagePreview src={process.env.PUBLIC_URL + '/assets/images/NMSUow_Teams.jpg'} alt="NMSU 2016 Overwatch Teams" thumbnailClassName="w-48 mx-auto" />
            
            <p>
                My time on the team was an amazing experience, and I was able to make lifelong friends.
                Shortly after I left the team, the University decided to make the esports club an official program.
                They were able to get a new computer lab on campus, and were given a budget to purchase equipment and attend events.
                I was an unofficial advisor for the organization for a time after my graduation, and I am proud to see what the organization has become.
            </p>

            <a href="https://esports.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="ml-auto">
                <Button variant="outlined" className="flex gap-2">
                    <LinkIcon />
                    NMSU Esports
                </Button>
            </a>

        </TabPanelContent>
    );
}

export default EsportsTabPanel;