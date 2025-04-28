import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-b from-gray-900 to-black text-white'
        : 'bg-gradient-to-b from-blue-900 to-blue-950 text-white'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="space-y-4 px-12">
            <Link to="/" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-200'
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <h3 className="text-xl font-bold">Bhasha</h3>
            </Link>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-200'}`}>
              Empowering global communication through advanced language detection technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 px-10">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white'
                    : 'text-blue-200 hover:text-white'
                }`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white'
                    : 'text-blue-200 hover:text-white'
                }`}>About Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 px-8">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pdf-detection" className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white'
                    : 'text-blue-200 hover:text-white'
                }`}>PDF Language Detection</Link>
              </li>
              <li>
                <Link to="/text-detection" className={`transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white'
                    : 'text-blue-200 hover:text-white'
                }`}>Text Language Detection</Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4 px-14">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white'
                  : 'text-blue-200 hover:text-white'
              }`}>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="https://x.com/" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white'
                  : 'text-blue-200 hover:text-white'
              }`}>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c..." />
                </svg>
              </a>
              <a href="https://github.com/" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white'
                  : 'text-blue-200 hover:text-white'
              }`}>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c..." />
                </svg>
              </a>
              <a href="https://in.linkedin.com/" className={`transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white'
                  : 'text-blue-200 hover:text-white'
              }`}>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h..." />
                </svg>
              </a>
            </div>
            <div className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-blue-200'}`}>
              <p>Email: contact@bhasha.ai</p>
              <p>Phone: +91 9898989898</p>
              <p>Location: Bangalore, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-blue-800'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-blue-200'}`}>
              &copy; {new Date().getFullYear()} Bhasha. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-blue-200 hover:text-white'
              }`}>Privacy Policy</Link>
              <Link to="/terms" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-blue-200 hover:text-white'
              }`}>Terms of Service</Link>
              <Link to="/cookies" className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-blue-200 hover:text-white'
              }`}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
