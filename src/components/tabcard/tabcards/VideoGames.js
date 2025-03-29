import TabCard from '../TabCard'

function VideoGames() {
    const tabs = [
        { 
            id: 'competitive', 
            label: 'Competitive', 
            content: <p>competitive</p> 
        },
        { 
            id: 'casual', 
            label: 'Casual', 
            content: <p>casual</p> 
        },
        { 
            id: 'coaching', 
            label: 'Coaching', 
            content: <p>coaching</p> 
        }
    ];

    return <TabCard title="Video Games" tabs={tabs} />
}

export default VideoGames;