import { Link } from 'react-router-dom';
import TabContainer from '../TabContainer/TabContainer';

function Navbar({ activeTab }) {

    return (
        <>
            <div className="flex bg-white justify-center">
                <h1>Christopher Scirone</h1>
            </div>
            <nav className="flex flex-col items-center gap-2 p-6 border-b border-neutral-200 bg-white sticky top-0 z-10">
                <TabContainer className="justify-center">
                    <Link to="/" className={`tab ${activeTab === 'home' ? 'active' : ''}`}>About</Link>
                    <Link to="/career" className={`tab ${activeTab === 'career' ? 'active' : ''}`}>Career</Link>
                    <Link to="/recommendations" className={`tab ${activeTab === 'recommendations' ? 'active' : ''}`}>Recommendations</Link>
                    <Link to="/test" className={`tab ${activeTab === 'test' ? 'active' : ''}`}>Test</Link>
                </TabContainer> 
            </nav>
        </>
    );
}

export default Navbar;