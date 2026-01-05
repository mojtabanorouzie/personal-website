'use client';

import { useTheme } from '@/lib/theme';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-600 hover:shadow-lg transition-all duration-300"
        aria-label="Toggle theme"
        disabled
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-600 hover:shadow-lg transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-yellow-300 group-hover:scale-110 transition-transform"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 001.414-1.414l-.707-.707zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
