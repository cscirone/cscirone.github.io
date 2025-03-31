import TabPanelContent from "../TabPanelContent";

function JavaScriptTabPanel() {
    return (
        <TabPanelContent>
            <p>
                JavaScript is perhaps my favorite language to work with.
                    I have a strong understanding of the language, and its capabilities.
                    JavaScript has been my main tool for developing complex component behaviors, and interacting with APIs on the frontend.
            </p>

            <h4>General Motors</h4>
            <p>
                At General Motors, I utilized JavaScript heavily during the Forms 2.0 project.
                    Every custom form component utilized JavaScript to pre-populate data, and hit APIs to fetch data for dynamic content.
                    This includes Dealer Locator, Dealer Search, Address Search, and more.
                    The most prominent of these components, in my opinion, was the Phone Number Verification component for Chevrolet Korea.
                    This component needed to communicate with an external API to verify that the phone number provided was a valid and active korean number.
                    The component itself was a multi-step form, wherein the user would enter their phone number, and once verified, were prompted to enter their korean identification number.
                    This component pushed our understanding of how AEM forms work, and how to effectively utilize JavaScript within the AEM framework.
            </p>

            <h4>StrongMind</h4>
            <p>
                At StrongMind, I was pivotal in the centralization of our JavaScript codebase.
                    We utilized Stimulus.js to handle all frontend behaviors within our Ruby on Rails applications.
                    All of our components that required complex frontend behaviors were stored in Backpack UI, and deployed to a CDN.
                    This allowed all of our applications to make use of these components, and reduced code duplication.
                    Of all of the components that I developed in Backpack UI, my favorite was the Accordion component.
                    It utilized JavaScript to handle the animation of the component, as CSS did not (and still does not fully) support the animation of {'<details>'} elements.
                    This component was heavily used in Course Builder, specifically in the Course Outline and Tree View.
                    It is a very important component for showing information/children objects related to a parent object, or for showing non-essential information in a collapsible format.
            </p>
            <p>
                The most complex component that I developed in Backpack UI is the Text Editor component.
                    Based off of the Toast UI Editor, I was able to create a highly customized text editor for use in Course Builder.
                    It expanded the syntax of markdown to include custom elements.
                    These custom elements include glossary terms, references, enhanced media (images, videos, audio, and interactives), and latex equations.
                    This component also included a custom action that allowed users to regenerate sections of text in the editor using AI LLMs.
                    This was a very complex component, and I am very proud of the work that I did on it.
            </p>
        </TabPanelContent>
    );
}

export default JavaScriptTabPanel;