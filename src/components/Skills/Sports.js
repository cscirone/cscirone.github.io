import { useState } from 'react';

import Button from '../button/Button';
import TabContainer from '../TabContainer/TabContainer';

function Sports() {
    const [activeTab, setActiveTab] = useState('golf');

    return (
        <div className="card">
            <h3>Sports</h3>
            <TabContainer>
                <Button 
                    type={activeTab === 'golf' ? 'tab-active' : 'tab'}
                    text="Golf"
                    onButtonClick={() => setActiveTab('golf')}
                />
                <Button 
                    type={activeTab === 'bowling' ? "tab-active" : "tab"}
                    text="Bowling" 
                    onButtonClick={() => setActiveTab('bowling')}
                />
                <Button 
                    type={activeTab === 'baseball' ? "tab-active" : "tab"}
                    text="Baseball" 
                    onButtonClick={() => setActiveTab('baseball')}
                />
            </TabContainer>

            <div className={activeTab === 'golf' ? '' : 'hidden'}>
                <p>
                    html
                </p>
            </div>

            <div className={activeTab === 'bowling' ? '' : 'hidden'}>
                <p>
                    css
                </p>
            </div>

            <div className={activeTab === 'baseball' ? '' : 'hidden'}>
                <p>
                    javascript
                </p>
            </div>
        </div>
    );
}

export default Sports;