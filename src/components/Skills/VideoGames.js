import { useState } from 'react';

import Button from '../button/Button';
import TabContainer from '../TabContainer/TabContainer';

function VideoGames() {
    const [activeTab, setActiveTab] = useState('competitive');

    return (
        <div className="card">
            <h3>Video Games</h3>
            <TabContainer>
                <Button 
                    type={activeTab === 'competitive' ? 'tab-active' : 'tab'}
                    text="Competitive"
                    onButtonClick={() => setActiveTab('competitive')}
                />
                <Button 
                    type={activeTab === 'casual' ? "tab-active" : "tab"}
                    text="Casual" 
                    onButtonClick={() => setActiveTab('casual')}
                />
                <Button 
                    type={activeTab === 'coaching' ? "tab-active" : "tab"}
                    text="Coaching" 
                    onButtonClick={() => setActiveTab('coaching')}
                />
            </TabContainer>

            <div className={activeTab === 'competitive' ? '' : 'hidden'}>
                <p>
                    html
                </p>
            </div>

            <div className={activeTab === 'casual' ? '' : 'hidden'}>
                <p>
                    css
                </p>
            </div>

            <div className={activeTab === 'coaching' ? '' : 'hidden'}>
                <p>
                    javascript
                </p>
            </div>
        </div>
    );
}

export default VideoGames;