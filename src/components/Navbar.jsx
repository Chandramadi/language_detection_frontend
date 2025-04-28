import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleServiceClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`p-4 shadow-lg transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800'
        : 'bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-white text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Bhasha
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">Home</Link>
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-blue-200 transition-colors duration-300 font-medium flex items-center"
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
                  <Link 
                    to="/pdf-detection" 
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    onClick={handleServiceClick}
                  >
                    PDF Language Detection
                  </Link>
                  <Link 
                    to="/text-detection" 
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    onClick={handleServiceClick}
                  >
                    Text Language Detection
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">About</Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link to="/" className="block text-white hover:text-blue-200 transition-colors duration-300 font-medium">Home</Link>
              <Link to="/pdf-detection" onClick={handleServiceClick} className="block text-white hover:text-blue-200 transition-colors duration-300 font-medium">PDF Detection</Link>
              <Link to="/text-detection" onClick={handleServiceClick} className="block text-white hover:text-blue-200 transition-colors duration-300 font-medium">Text Detection</Link>
              <Link to="/about" className="block text-white hover:text-blue-200 transition-colors duration-300 font-medium">About</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;