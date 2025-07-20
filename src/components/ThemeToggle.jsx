import { useState, useEffect } from 'react';
import Button from './generic/Button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === 'dark' ||
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <Button
      onClick={() => setIsDark(!isDark)}
      variant='outline'
      className= {isDark ? 'bg-amber-50 text-gray-700' : 'bg-gray-800'}
    >
      {isDark ? <SunIcon className="size-6"/> : <MoonIcon className="size-6 text-gray-100"/>}
    </Button>
  );
};

export default ThemeToggle;
