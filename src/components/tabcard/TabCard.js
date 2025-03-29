import { useState } from 'react';
import Button from '../button/Button';
import TabContainer from '../TabContainer/TabContainer';

function TabCard({ title, tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="card">
            <h3>{title}</h3>
            <TabContainer>
                {tabs.map(tab => (
                    <Button 
                        key={tab.id}
                        type={activeTab === tab.id ? 'tab-active' : 'tab'}
                        text={tab.label}
                        onButtonClick={() => setActiveTab(tab.id)}
                    />
                ))}
            </TabContainer>

            {tabs.map(tab => (
                <div key={tab.id} className={activeTab === tab.id ? '' : 'hidden'}>
                    {tab.content}
                </div>
            ))}
        </div>
    );
}

export default TabCard;