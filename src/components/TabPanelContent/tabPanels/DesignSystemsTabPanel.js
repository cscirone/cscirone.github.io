import TabPanelContent from "../TabPanelContent";

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
        </TabPanelContent>
    );
}

export default DesignSystemsTabPanel;