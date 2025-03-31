import TabPanelContent from "../TabPanelContent";

function CSSTabPanel() {
    return (
        <TabPanelContent>
            <p>
                Cascading Style Sheets (CSS) has gained an insane amount of new features in recent years.
                    I am a firm believer that CSS should be used for most frontend display behaviors, that JavaScript should only be used for interactions not built directly into CSS or HTML, and that CSS is the most performant solution in a frontend developer's toolkit.
                    During my career I have developed a strong understanding of CSS, as well as CSS pre-processors like Sass and Less, and CSS frameworks such as Tailwind CSS.
                    All of these tools are powerful in the hand of UI designers and Frontend developers, and I am confident that I can use them to solve any UI/UX problem.
            </p>

            <h4>General Motors</h4>
            <p>
                At General Motors, I utilized Sass to create a comprehensive design system that was used across all of GM's brand websites worldwide.
                    In GM's AEM ecosystem, there was a master stylesheet that was used to style all components for all brands.
                    Layered on top, each brandsite had their own theme stylesheet, that overrode color variables and individual component styles in special cases.
                    While the branding themes have changed since then, these stylesheets are still in use today.
                    I can still recognize the styling classes, looking at the source code today.
            </p>

            <h4>StrongMind</h4>
            <p>
                At StrongMind, I was responsible for design and implementation of Backpack UI components (internal Storybook.js design system) and one-off components at the application level.
                    We utilized Tailwind CSS and Backpack UI to style all components across all applications.
                    I was instrumental in the streamlining of adding new components and modifying existing components in our design system in order to meet the ever changing needs of our students.
                    I partook in a design overhaul of our internal AI-driven course creation tool, Course Builder, aligning the design with our brand guidelines and improving the overall user experience.
                    Most recently, I was able to modify our design system to heavily utilize CSS variables.
                    This change allowed us to easily change the branding of all of our applications quickly and efficiently, while also allowing consuming applications to make use of brand variables in arbitrary Tailwind CSS classes.
            </p>
</TabPanelContent>
    );
}

export default CSSTabPanel;