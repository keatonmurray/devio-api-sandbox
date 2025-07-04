import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Topnav from '../components/Topnav';
import Pages from './content/Pages';

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
        <Pages isDark={isDark}/>
      </div>
    </div>
  );
};

export default Panel;
