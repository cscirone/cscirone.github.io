import { Link } from 'react-router-dom';

function Navbar({ activeTab }) {
    return (
        <nav className="flex flex-row gap-6 p-10 border-b border-neutral-200">
            <Link to="/" className={`tab ${activeTab === 'home' ? 'active' : ''}`}>About</Link>
            <Link to="/test" className={`tab ${activeTab === 'test' ? 'active' : ''}`}>Test</Link>
            <Link to="/career-history" className={`tab ${activeTab === 'career-history' ? 'active' : ''}`}>Career History</Link>
        </nav>
    );
}

export default Navbar;