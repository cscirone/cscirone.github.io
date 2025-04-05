import TabPanelContent from "../TabPanelContent";
import ImagePreview from "../../imagePreview/ImagePreview";

function GeologyTabPanel() {
    return (
        <TabPanelContent>
            <p>
                Ever since I was a small child, I had a fascination with rocks and minerals.
                I used to go out in the desert and pick up "lava rocks" and petrified wood.
                I'd take them home and polish them with a tumbler and display them on the shelf.
                So when given the opportunity to take a geology class in university, I eagerly took it.
                We learned about mineral classifications, tectonic plates, and the practical applications of geology in the job market.
                My favorite part of the class were the field excursions, where we got to go out to local geologic formations, such as the Organ Mountains and a local caldera off of I-25.
                It was a great way to see mineral formations in the wild.
            </p>

            <div className="flex flex-wrap gap-2 mx-auto">
                <ImagePreview 
                    src={process.env.PUBLIC_URL + '/assets/images/geology_hike_2.jpg'} 
                    alt="NMSU Geology"
                    thumbnailClassName="w-48"
                />

                <ImagePreview 
                    src={process.env.PUBLIC_URL + '/assets/images/geology_hike.jpg'} 
                    alt="NMSU Geology"
                    thumbnailClassName="w-48"
                />
            </div>

        </TabPanelContent>
    );
}

export default GeologyTabPanel;