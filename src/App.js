import './stylesheets/App.css';
import './stylesheets/Tab.css';
import './stylesheets/Card.css';

import { useState, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import TestPage from './pages/TestPage';
import Home from './pages/Home';

import Navbar from './components/navbar/Navbar';

library.add(fas, fab, far)

function AppContent() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Get the path without the leading slash and set it as the active tab
    const path = location.pathname.slice(1) || 'home';
    setActiveTab(path);
  }, [location]);

  return (
    <>
      <Navbar activeTab={activeTab} />

      <div className="flex flex-col gap-6 p-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/career" element={<TestPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
