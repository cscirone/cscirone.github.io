import ImagePreview from "../../imagePreview/ImagePreview";
import TabPanelContent from "../TabPanelContent";

function WeebTabPanel() {
    return (
        <TabPanelContent>
            <ImagePreview
                src={process.env.PUBLIC_URL + '/assets/images/anime_night.jpg'}
                alt="Anime Night!"
                thumbnailClassName="w-64 mx-auto"
            />

            <p>
                I've always been a fan of anime, so when I found out that there was an anime club at NMSU, I was excited to join.
                I was a member of <i><strong>Anime Night!</strong></i> for 2 years, and I was able to attend and help run events, such as the annual Anime Expo and Video Game Tournaments at the NMSU community center.
                During my senior year, I was voted in as the club's president, where I was responsible for planning weekly meetings, and managing the club's assets and budget.
                This involved a lot of planning, organization, and communication with the other club members, which helped me develop my leadership and organizational skills.
                While it hasn't been active since I graduated, I still keep in touch with some of the other members, and we still get together to watch anime and play video games.
            </p>

        </TabPanelContent>
    );
}

export default WeebTabPanel;