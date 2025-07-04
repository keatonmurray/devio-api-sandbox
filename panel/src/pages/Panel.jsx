import { useState } from 'react';
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

      <div className="d-flex">
        <Sidebar theme={theme} />

        <div className={`d-flex align-items-center justify-content-center w-100 flex-wrap p-4 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
          {/* <h1>Welcome to Devio</h1> */}
          <div className="w-100 text-center">
            {/* <p>This is your dashboard content area.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
