import JdoodleEmbed from '../components/jDoodleEmbed/JdoodleEmbed';

import PersonaButton from '../components/customButtons/PersonaButton';
import RandomShapes from '../components/randomShapes/RandomShapes';

import SwiperNav from '../components/swiper/SwiperNav';

import TabPanels from '../components/TabPanelContent/TabPanels';

function TestPage() {
    return (
        <div className="flex flex-col gap-4">
            <title>Test Page</title>

            hello

            <PersonaButton className="w-fit" tiltDirection="left">
                Index
            </PersonaButton>

            <SwiperNav cards={[<TabPanels.DesignSystemsTabPanel />, <TabPanels.CSSTabPanel />, <TabPanels.JavaScriptTabPanel />, <TabPanels.ReactTabPanel />]} />

            <RandomShapes />
        </div>
    );
}

export default TestPage;