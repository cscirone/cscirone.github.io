import TabCard from '../TabCard'

function Sports() {
    const tabs = [
        { id: 'golf', label: 'Golf', content: <p>golf</p> },
        { id: 'bowling', label: 'Bowling', content: <p>bowling</p> },
        { id: 'baseball', label: 'Baseball', content: <p>baseball</p> }
    ];

    return <TabCard title="Sports" tabs={tabs} />
}

export default Sports;