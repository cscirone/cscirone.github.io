import { useState } from 'react';

import Button from '../button/Button';
import TabContainer from '../TabContainer/TabContainer';

function BackendSkills() {
    const [activeTab, setActiveTab] = useState('java');

    return (
        <div className="card">
            <h3>Backend</h3>
            <TabContainer>
                <Button 
                    type={activeTab === 'java' ? 'tab-active' : 'tab'}
                    text="Java"
                    onButtonClick={() => setActiveTab('java')}
                />
                <Button 
                    type={activeTab === 'ruby-on-rails' ? "tab-active" : "tab"}
                    text="Ruby on Rails" 
                    onButtonClick={() => setActiveTab('ruby-on-rails')}
                />
                <Button 
                    type={activeTab === 'c' ? "tab-active" : "tab"}
                    text="C, C++, C#" 
                    onButtonClick={() => setActiveTab('c')}
                />
                <Button 
                    type={activeTab === 'aem' ? "tab-active" : "tab"}
                    text="AEM" 
                    onButtonClick={() => setActiveTab('aem')}
                />
            </TabContainer>

            <div className={activeTab === 'java' ? '' : 'hidden'}>
                <p>
                    java
                </p>
            </div>

            <div className={activeTab === 'ruby-on-rails' ? '' : 'hidden'}>
                <p>
                    ruby on rails
                </p>
            </div>

            <div className={activeTab === 'c' ? '' : 'hidden'}>
                <p>
                    c
                </p>
            </div>

            <div className={activeTab === 'aem' ? '' : 'hidden'}>
                <p>
                    aem
                </p>
            </div>
        </div>
    );
}

export default BackendSkills;