import TabPanelContent from "../TabPanelContent";
import ImagePreview from "../../imagePreview/ImagePreview";

function VGCoachingTabPanel() {
    return (
        <TabPanelContent>
            <p>
                Ever since I graduated from college, I have been itching to get back into competitive play.
                However, I have found that it is difficult to keep up with the skill level with less time on my hands.
                As such, I have started to coach players to help proliferate my knowledge of the competitive environment.
                I coach a Spawn Point Championship Series Rookie Division Overwatch team, called Nemesis.
                Coaching is a very rewarding experience, and it gives me a more casual environment to hone my leadership skills in.
            </p>

            <ImagePreview 
                src={process.env.PUBLIC_URL + '/assets/images/nemesis_logo.png'} 
                alt="Nemesis Logo"
                thumbnailClassName="w-48 mx-auto"
            />
        </TabPanelContent>
    );
}

export default VGCoachingTabPanel;