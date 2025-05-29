import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const formatSectionName = (name) =>
  name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-black dark:text-white">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleScroll('hero')}
        >
          Priyanka Gandhi A | Portfolio
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {[
            'about',
            'passion',
            'performance',
            'experience',
            'projects',
            'contact',
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(section);
                }}
                className="hover:text-pink-700 transition-colors duration-300"
              >
                {formatSectionName(section)}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black dark:text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile drawer menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md px-6 py-6 shadow-lg">
          <ul className="flex flex-col space-y-6 text-lg font-medium text-black dark:text-white">
            {[
              'about',
              'passion',
              'performance',
              'experience',
              'projects',
              'contact',
            ].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(section);
                  }}
                  className="hover:text-pink-700 transition-colors duration-300"
                >
                  {formatSectionName(section)}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMenuOpen(false);
                }}
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
