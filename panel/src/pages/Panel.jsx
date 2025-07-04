import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Topnav from '../components/Topnav';

const Panel = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`} style={{ minHeight: '100vh' }}>
      <Topnav theme={theme} toggleTheme={toggleTheme} />

      <div className="d-flex mt-4">
        <Sidebar theme={theme} />
        <div className="flex-grow-1 px-4">
          <Outlet context={{ isDark }} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
