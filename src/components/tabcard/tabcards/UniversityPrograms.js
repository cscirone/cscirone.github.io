import TabCard from '../TabCard'

function UniversityPrograms() {
    const tabs = [
        { 
            id: 'ignitecs', 
            label: 'Google igniteCS', 
            content: <p>ignitecs</p> 
        },
        { 
            id: 'ctik-12', 
            label: 'CTiK-12', 
            content: <p>ctik-12</p> 
        },
        { 
            id: 'pla', 
            label: 'PLA', 
            content: <p>pla</p> 
        }
    ];

    return <TabCard title="University Programs" tabs={tabs} />
}

export default UniversityPrograms;