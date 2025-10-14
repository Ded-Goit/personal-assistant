'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.css';
import { PiMoonStars, PiSunHorizon } from 'react-icons/pi';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(initial);
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button className={styles.switcher} onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <PiMoonStars size={18} /> : <PiSunHorizon size={18} />}
    </button>
  );
}