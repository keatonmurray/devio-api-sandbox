"use client"

import { useState } from "react";

export default function Panel() {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    const isDark = theme === 'dark';

    return (
        <div className={`${isDark ? 'bg-dark text-white' : 'bg-white text-dark'}`} style={{ minHeight: '100vh' }}>

        </div>
    );
}