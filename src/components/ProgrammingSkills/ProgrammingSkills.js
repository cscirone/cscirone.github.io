import { useState } from 'react';

import Button from '../button/Button';
import TabContainer from '../TabContainer/TabContainer';

function ProgrammingSkills() {

    const [activeTab, setActiveTab] = useState('html');
    return (
        <>
            <TabContainer>
                    <Button 
                        type={activeTab === 'html' ? "tab-active" : "tab"} 
                        text="HTML" 
                        onButtonClick={() => setActiveTab('html')}
                    />
                    <Button 
                        type={activeTab === 'css' ? "tab-active" : "tab"}
                        text="CSS" 
                        onButtonClick={() => setActiveTab('css')}
                    />
                    <Button 
                        type={activeTab === 'javascript' ? "tab-active" : "tab"}
                        text="JavaScript" 
                        onButtonClick={() => setActiveTab('javascript')}
                    />
                    <Button 
                        type={activeTab === 'react' ? "tab-active" : "tab"}
                        text="React" 
                        onButtonClick={() => setActiveTab('react')}
                    />
                    <Button 
                        type={activeTab === 'ruby-on-rails' ? "tab-active" : "tab"}
                        text="Ruby on Rails" 
                        onButtonClick={() => setActiveTab('ruby-on-rails')}
                    />
                </TabContainer>

                <div className={activeTab === 'html' ? '' : 'hidden'}>
                    <p>
                        html
                    </p>
                </div>

                <div className={activeTab === 'css' ? '' : 'hidden'}>
                    <p>
                        css
                    </p>
                </div>

                <div className={activeTab === 'javascript' ? '' : 'hidden'}>
                    <p>
                        javascript
                    </p>
                </div>

                <div className={activeTab === 'react' ? '' : 'hidden'}>
                    <p>
                        react
                    </p>
                </div>

                <div className={activeTab === 'ruby-on-rails' ? '' : 'hidden'}>
                    <p>
                        ruby-on-rails
                    </p>
                </div>
        </>
    );
}

export default ProgrammingSkills;