// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import both logos
import logoWhite from '../assets/logo-white.svg'; // Light logo for transparent navbar
import logoDark from '../assets/logo-dark.svg'; // Dark logo for scrolled navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define styles inline
  const navbarStyles = {
    link: {
      position: 'relative',
      padding: '0.5rem 0',
      transition: 'color 0.3s ease',
    },
    linkAfter: {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '0',
      left: '0',
      transition: 'width 0.3s ease',
    },
    linkHover: {
      width: '100%',
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items including the new Questionnaire
  const navItems = ['Home', 'Projects', 'About', 'Contact', 'Questionnaire'];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - changes based on scroll state */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center h-14 md:h-16">
              <img
                src={scrolled ? logoDark : logoWhite}
                alt="RP Design Technologies"
                className={`transition-all duration-300 ${
                  scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                } w-auto drop-shadow-sm`}
                style={{ filter: scrolled ? 'none' : 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))' }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled ? 'text-gray-800 hover:text-red-700' : 'text-white hover:text-white/80'
                  }`}
                  style={navbarStyles.link}
                  onMouseEnter={(e) => {
                    const target = e.target;
                    // Create or get after element
                    let after = target.querySelector('.link-after');
                    if (!after) {
                      after = document.createElement('span');
                      after.className = 'link-after';
                      after.style.position = 'absolute';
                      after.style.height = '2px';
                      after.style.width = '0';
                      after.style.bottom = '0';
                      after.style.left = '0';
                      after.style.transition = 'width 0.3s ease';
                      after.style.backgroundColor = scrolled ? '#c10230' : '#ffffff';
                      target.style.position = 'relative';
                      target.appendChild(after);
                    }
                    after.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const after = e.target.querySelector('.link-after');
                    if (after) {
                      after.style.width = '0';
                    }
                  }}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-red-700' : 'text-white hover:text-white/80'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block text-gray-800 hover:text-red-700 font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;