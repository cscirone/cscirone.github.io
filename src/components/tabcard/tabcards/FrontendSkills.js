import TabCard from '../TabCard' 

function FrontendSkills() {
    const tabs = [
        { id: 'html', label: 'HTML', content: <p>html</p> },
        { id: 'css', label: 'CSS', content: <p>css</p> },
        { id: 'javascript', label: 'JavaScript', content: <p>javascript</p> }
    ];

    return <TabCard title="Frontend Skills" tabs={tabs} />
}

export default FrontendSkills;