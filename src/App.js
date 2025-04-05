import './stylesheets/App.css';

import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import TestPage from './pages/TestPage';
import Home from './pages/Home';
import Career from './pages/Career';
import Recommendations from './pages/Recommendations';
import Contact from './pages/Contact';

import { ThemeProvider, createTheme } from '@mui/material/styles';

//import Navbar from './components/navbar/Navbar';
import DrawerAppBar from './components/drawerAppBar/DrawerAppBar';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6b21a8',
    },
    secondary: {
      main: '#059669',
    },
    background: {
      default: '#f4f4f5',
    },
    success: {
      main: '#22c55e',
    },
  },
});


function AppContent() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    // Get the path without the leading slash and set it as the active tab
    const path = location.pathname.slice(1) || 'about';
    setActiveTab(path);
  }, [location]);

  return (
    <div className="flex flex-col">
      {/*<Navbar activeTab={activeTab} />*/}
      <DrawerAppBar />

      <main className="px-4 py-2 sm:px-10 sm:py-4 flex flex-col gap-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/bits-and-bobs" element={<TestPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
