import { useState } from 'react';

import Button from '../button/Button';
import TabContainer from '../TabContainer/TabContainer';

function UniversityPrograms() {
    const [activeTab, setActiveTab] = useState('ignitecs');

    return (
        <div className="card">
            <h3>University Programs</h3>
            <TabContainer>
                <Button 
                    type={activeTab === 'ignitecs' ? 'tab-active' : 'tab'}
                    text="Google igniteCS"
                    onButtonClick={() => setActiveTab('ignitecs')}
                />
                <Button 
                    type={activeTab === 'ctik-12' ? "tab-active" : "tab"}
                    text="CTiK-12" 
                    onButtonClick={() => setActiveTab('ctik-12')}
                />
                <Button 
                    type={activeTab === 'pla' ? "tab-active" : "tab"}
                    text="PLA" 
                    onButtonClick={() => setActiveTab('pla')}
                />
            </TabContainer>

            <div className={activeTab === 'ignitecs' ? '' : 'hidden'}>
                <p>
                    ignitecs
                </p>
            </div>

            <div className={activeTab === 'ctik-12' ? '' : 'hidden'}>
                <p>
                    ctik-12
                </p>
            </div>

            <div className={activeTab === 'pla' ? '' : 'hidden'}>
                <p>
                    pla
                </p>
            </div>
        </div>
    );
}

export default UniversityPrograms;