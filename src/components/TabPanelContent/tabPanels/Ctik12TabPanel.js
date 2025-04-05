import TabPanelContent from "../TabPanelContent";
import ResponsiveIFrame from "../../responsiveIframe/ResponsiveIFrame";

function Ctik12TabPanel() {
    return (
        <TabPanelContent>
            <p>
                The CTiK-12 program at NMSU was a community outreach program where student Dissect Fellows worked with teachers at local high schools. 
                The goal of the program was to integrate Computational Thinking concepts and skills into the curriculum of whatever class the Fellow was assigned to. 
                This included both STEM and non-STEM classes. 
                Fellows were to help spread awareness and spark interest in Computer Science at Las Cruces high schools while collecting data to assist in bettering our efforts and to monitor our efficacy. 
                I was assigned to an English class where I developed a long term activity using Ozobots, small programmable robots. 
                The Ozobots were used to represent the actions of characters in a novel that the class was reading. 
                Alongside literary analysis, students were taught how to program the robots, the basics of algorithms, abstraction, and programming principles.
                Below is one activity that the students completed, where they used Ozobots to represent key events from a chapter of the novel they were reading.
            </p>

            <ResponsiveIFrame src="https://docs.google.com/presentation/d/e/2PACX-1vTTOe7mtMB4GYPXgt7gxOhTmDtTgiyntLSZGCPd5Tn5XZAyJbQ0qC1DkaZdixky-g/pubembed?start=false&loop=false&delayms=3000" />

        </TabPanelContent>
    );
}

export default Ctik12TabPanel;