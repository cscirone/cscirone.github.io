import TabCard from '../TabCard'

function BackendSkills() {
    const tabs = [
        { id: 'java', label: 'Java', content: <p>java</p> },
        { id: 'ruby-on-rails', label: 'Ruby on Rails', content: <p>ruby-on-rails</p> },
        { id: 'c', label: 'C, C++, C#', content: <p>c</p> },
        { id: 'aem', label: 'AEM', content: <p>aem</p> }
    ];

    return <TabCard title="Backend Skills" tabs={tabs} />
}

export default BackendSkills;