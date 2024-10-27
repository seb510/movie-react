import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            <div className="toggle-knob"></div>
        </div>
    );
}
