'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.css';
import { PiMoonStars, PiSunHorizon } from 'react-icons/pi';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // SSR-safe initialization
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', initial);
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  if (!theme) return null; // avoid blinking during SSR

  return (
    <button
      className={styles.switcher}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <PiMoonStars size={18} /> : <PiSunHorizon size={18} />}
    </button>
  );
}