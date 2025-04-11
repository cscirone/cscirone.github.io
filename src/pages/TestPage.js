import JdoodleEmbed from '../components/jDoodleEmbed/JdoodleEmbed';

import PersonaButton from '../components/customButtons/PersonaButton';

function TestPage() {
    return (
        <div className="flex flex-col gap-4">
            <title>Test Page</title>

            hello

            <PersonaButton className="w-fit" tiltDirection="left">
                Index
            </PersonaButton>
        </div>
    );
}

export default TestPage;