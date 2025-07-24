"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/index.css';
import { useState } from 'react';
import { Poppins } from 'next/font/google';
import Topnav from '@/components/Topnav';
import Sidebar from '@/components/Sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <html lang="en">
      <head>
        <title>Devio CMS</title>
      </head>
      <body className={`${poppins.className} ${isDark ? 'bg-dark text-white' : ''}`}>
        <Topnav theme={theme} toggleTheme={toggleTheme} />
        <div className="d-flex">
          <Sidebar theme={theme} />
            <div className="flex-grow-1 mt-4">
              {children}
            </div>
        </div>
      </body>
    </html>
  );
}
