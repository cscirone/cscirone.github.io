import { useState } from 'react';

import Button from '../button/Button';
import TabContainer from '../TabContainer/TabContainer';

function ProfessionalSkills() {
    const [activeTab, setActiveTab] = useState('leadership');

    return (
        <div className="card">
            <h3>Professional</h3>
            <TabContainer>
                <Button 
                    type={activeTab === 'leadership' ? 'tab-active' : 'tab'}
                    text="Leadership"
                    onButtonClick={() => setActiveTab('leadership')}
                />
                <Button 
                    type={activeTab === 'collaboration' ? "tab-active" : "tab"}
                    text="Collaboration" 
                    onButtonClick={() => setActiveTab('collaboration')}
                />
                <Button 
                    type={activeTab === 'agile' ? "tab-active" : "tab"}
                    text="Agile" 
                    onButtonClick={() => setActiveTab('agile')}
                />
                <Button 
                    type={activeTab === 'project-management' ? "tab-active" : "tab"}
                    text="Project Management" 
                    onButtonClick={() => setActiveTab('project-management')}
                />
            </TabContainer>

            <div className={activeTab === 'leadership' ? '' : 'hidden'}>
                <p>
                    leadership
                </p>
            </div>

            <div className={activeTab === 'collaboration' ? '' : 'hidden'}>
                <p>
                    collaboration
                </p>
            </div>

            <div className={activeTab === 'agile' ? '' : 'hidden'}>
                <p>
                    agile
                </p>
            </div>

            <div className={activeTab === 'project-management' ? '' : 'hidden'}>
                <p>
                    project management
                </p>
            </div>
        </div>
    );
}

export default ProfessionalSkills;