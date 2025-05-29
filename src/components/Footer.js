// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import the logo
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-uga-black text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/">
              <img src={logo} alt="RP Design Technologies" className="h-10 mb-4" />
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              Design and Health Innovations Company {/* Changed from "Education and Health Innovations" */}
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Athens, Georgia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Focus Areas</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Design Innovation</li> {/* Changed from "STEM Education" */}
              <li className="text-gray-300">Creative Technology Solutions</li>
              <li className="text-gray-300">Health Diagnostics</li>
              <li className="text-gray-300">Structural Health</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">1670 Terrapin Ct</p>
            <p className="text-gray-300 mb-2">Watkinsville, GA 30677</p>
            <p className="text-gray-300 mb-2">Tel: 706-769-0435</p>
            <p className="text-gray-300">
              Email: <a href="mailto:rmparti2011@rpdetech.com" className="hover:text-white">rmparti2011@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} RP Design Technologies, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;