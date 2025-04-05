import TabPanelContent from "../TabPanelContent";
import ImagePreview from "../../imagePreview/ImagePreview";

function BaseBallTabPanel() {
    return (
        <TabPanelContent>
            <p>
                Baseball is a sport that I have been playing since I was 5 years old.
                I played on a number of little league teams, moving up to USSSA, and eventually to the Cibola High School Junior Varsity team.
                Baseball taught me a very valueable lesson growing up.
                Having always been a shorter person, I was never looked at as a threat on the field.
                But, I learned that I could use my size to my advantage.
                I became a fast runner, and a skilled precision hitter.
                My last year on the team, I was able to bat .500, and lead the team in RBIs.
            </p>

            <p>
                Beyond my time on the field, I have also enjoyed keeping up with professional baseball.
                My favorite team is the Los Angeles Dodgers, and I am proud to have been able to meet many of the players over the years at the Cactus League Spring Training Complex in Arizona.
            </p>

            <ImagePreview 
                src={process.env.PUBLIC_URL + '/assets/svg/dodgers.svg'} 
                alt="Los Angeles Dodgers Logo"
                thumbnailClassName="bg-[#004680] p-3 w-48 mx-auto"
                bgColor="#004680"
            />
        </TabPanelContent>
    );
}

export default BaseBallTabPanel;