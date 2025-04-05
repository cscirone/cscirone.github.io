import TabPanelContent from "../TabPanelContent";
import ImageList from "../../imageList/ImageList";

const images = [
    {
        src: process.env.PUBLIC_URL + '/assets/images/Jak_and_Daxter.webp',
        alt: "Jak and Daxter",
        thumbnailClassName: "w-full",
        title: "Jak and Daxter",
        subtitle: "Naughty Dog"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/P5R.webp',
        alt: "Persona 5 Royal",
        thumbnailClassName: "w-full",
        title: "Persona 5 Royal",
        subtitle: "Atlus"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/Thelegendofzeldatwilightprincess.webp',
        alt: "The Legend of Zelda: Twilight Princess",
        thumbnailClassName: "w-full",
        title: "The Legend of Zelda: Twilight Princess",
        subtitle: "Nintendo"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/Paper_Mario_The_Thousand-Year_Door_29.webp',
        alt: "Paper Mario: The Thousand-Year Door",
        thumbnailClassName: "w-full",
        title: "Paper Mario: The Thousand-Year Door",
        subtitle: "Nintendo"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/A_Hat_in_Time.webp',
        alt: "A Hat in Time",
        thumbnailClassName: "w-full",
        title: "A Hat in Time",
        subtitle: "Gears for Breakfast"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/svg/Minecraft_logo_2.svg',
        alt: "Minecraft",
        thumbnailClassName: "w-full",
        title: "Minecraft",
        subtitle: "Mojang Studios"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/stardew_valley.webp',
        alt: "Stardew Valley",
        thumbnailClassName: "w-full",
        title: "Stardew Valley",
        subtitle: "ConcernedApe"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/svg/Undertale.svg',
        alt: "Undertale",
        thumbnailClassName: "w-full bg-black p-3",
        title: "Undertale",
        subtitle: "Toby Fox"
    },
    {
        src: process.env.PUBLIC_URL + '/assets/images/Slay_the_Spire.webp',
        alt: "Slay the Spire",
        thumbnailClassName: "w-full",
        title: "Slay the Spire",
        subtitle: "Mega Crit Games"
    }    
]

function VGCasualTabPanel() {
    return (
        <TabPanelContent>
            <p>
                Casually, I enjoy RPGs, Platformers, and Survival games.
                Particularly, I very much enjoy indie games, as they are often more creative and have more exploratory game mechanics.
                Below are some of favorite casual games:
            </p>

            <ImageList images={images} />
        </TabPanelContent>
    );
}

export default VGCasualTabPanel;