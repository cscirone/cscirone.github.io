import TabPanelContent from "../TabPanelContent";

function DeploymentTabPanel() {
    return (
        <TabPanelContent>
            <p>
                I have experience with deployment through GitHub Actions.
                During my time at StrongMind, I used GitHub Actions to deploy Backpack UI, StrongMind's design system.
                I had to make sure that the yml file was properly configured to install the Node dependencies, build all Less stylesheets into a single CSS file using lessc, and bundle/minify all JavaScript Stimulus controllers so that they could be sent to our AWS CDN.
            </p>
        </TabPanelContent>
    );
}

export default DeploymentTabPanel;