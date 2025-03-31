import TabPanelContent from "../TabPanelContent";

function UserResearchTabPanel() {
    return (
        <TabPanelContent>
            <p>
                Design is a process, and it is important to understand the needs of your users.
                During my time at Strongmind, I utilized Hotjar and Google Analytics to gather data on user behavior, and to identify pain points in our workflows.
                Hotjar allowed me to record user sessions, and to particularly hone in on workflows that caused user frustration.
                One instance that stood out to me the most was a student who was attempting to message their instructor, but got lost in a loop between reading their message, and verifying that their message was sent.
                It was not clear to the user that they had sent a message, and we received direct feedback from the student via our customer support team that this was the case.
                The solution was to add a notification that they had sent a message and that the instructor would respond as soon as possible, as at this point our application didn not have the concept of conversations and mailboxes.
                Similarly, I used Google Analytics to identify the least used features of our applications.
                Knowing which features are not useful to our users is just as important as knowing where they get lost.
                This allows us to prioritize features and functionality that brings business and user value, while allowing us to determine steps in our workflows that can be cut or improved in some way.
                Especially in the education space, it is important to understand the direct needs of the students, instructors, and curriculum developers so that the applications can directly serve their needs.
            </p>
        </TabPanelContent>
    );
}

export default UserResearchTabPanel;