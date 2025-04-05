import TabPanelContent from "../TabPanelContent";
import Button from "@mui/material/Button";
import BackpackIcon from "@mui/icons-material/Backpack";

function DesignSystemsTabPanel() {
    return (
        <TabPanelContent>
            <p>
                Design systems are the best way to ensure design consistency and cohesion across an organization.
                I have experience with <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">Storybook.js</a>, and have used it to create and maintain a design system for both StrongMind and General Motors.
                The design system is a living library of components, constantly evolving to bring value to the organization.
                I have always made it a point to make the design systems I work on as modular and reusable as possible, ensuring that the amount of one-off components at the application level is minimized.
                Proper utilization of CSS variables and reusable JavaScript controllers/helpers allow for a design system to be easily maintained, iterated on, and extended to bring business value.
            </p>

            <p>
                The design system that I worked on for StrongMind is called Backpack UI.
                It details all of the components, patterns, and guidelines for StrongMind's Ruby on Rails applications.
                Included is documentation on how to use each component, and on how to utilize our Stimulus.js controllers in a Rails environment.
                I largely contributed to the documentation for each component, and was solely responsible for the controller documentation and installation instructions.
                Check out the design system that I worked on for StrongMind, Backpack UI, below:
            </p>

            <a href="https://ux.strongmind.com/" target="_blank" rel="noopener noreferrer" className="flex flex-1">
                <Button variant="outlined" className="flex flex-1 gap-2">
                    <BackpackIcon />
                    <span className="truncate">Backpack UI</span>
                </Button>
            </a>

            
        </TabPanelContent>
    );
}

export default DesignSystemsTabPanel;