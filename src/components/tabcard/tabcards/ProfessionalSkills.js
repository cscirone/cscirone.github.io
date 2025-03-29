import TabCard from '../TabCard'

function ProfessionalSkills() {
    const tabs = [
        { id: 'leadership', label: 'Leadership', content: <p>leadership</p> },
        { id: 'collaboration', label: 'Collaboration', content: <p>collaboration</p> },
        { id: 'agile', label: 'Agile', content: <p>agile</p> },
        { id: 'project-management', label: 'Project Management', content: <p>project management</p> }
    ];

    return <TabCard title="Professional Skills" tabs={tabs} />
}

export default ProfessionalSkills;