// src/pages/Questionnaire.js
import React from 'react';
import { motion } from 'framer-motion';

const FormRedirect = () => {
  // UGA colors
  const ugaRed = '#BA0C2F';
  
  // Microsoft Form URLs with the correct links you provided
  const BACTERIA_FORM_URL = 'https://forms.office.com/r/rbRjPiqX2x';
  const RESPIRATORY_FORM_URL = 'https://forms.office.com/r/wXU3Y66G3A';
  
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <>
      {/* Page Header - Standardized with other pages */}
      <section className="bg-uga-red text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Questionnaires
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Participate in our research to help improve pathogenic detection systems.
          </motion.p>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Participate in Our Research</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We invite you to participate in our research surveys about pathogenic detection systems. Your valuable feedback will help us improve our technology and better serve your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Bacteria Detection Form Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col h-full">
              {/* Text header instead of image */}
              <div className="bg-gray-50 p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-uga-red">Pathogenic Bacteria Detection</h3>
                <p className="text-gray-600 mt-2">System Questionnaire</p>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 mb-6 flex-grow">
                  This survey focuses on the detection and monitoring of pathogenic bacteria in various environments. Your insights will help us develop more effective detection systems.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Time to complete:</span> 5-10 minutes
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Responses:</span> 1 response
                  </p>
                </div>
                
                <button
                  onClick={() => handleButtonClick(BACTERIA_FORM_URL)}
                  style={{ backgroundColor: ugaRed }}
                  className="w-full text-white font-medium py-3 px-4 rounded-md hover:bg-red-800 transition duration-300 flex items-center justify-center"
                >
                  <span>Begin Survey</span>
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Respiratory Detection Form Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col h-full">
              {/* Text header instead of image */}
              <div className="bg-gray-50 p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-uga-red">Pathogenic Respiratory Detection</h3>
                <p className="text-gray-600 mt-2">System Questionnaire</p>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 mb-6 flex-grow">
                  This survey focuses on the detection and monitoring of respiratory pathogens and conditions. Your feedback will contribute to improvements in respiratory health monitoring.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Time to complete:</span> 5-10 minutes
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Responses:</span> 0 responses
                  </p>
                </div>
                
                <button
                  onClick={() => handleButtonClick(RESPIRATORY_FORM_URL)}
                  style={{ backgroundColor: ugaRed }}
                  className="w-full text-white font-medium py-3 px-4 rounded-md hover:bg-red-800 transition duration-300 flex items-center justify-center"
                >
                  <span>Begin Survey</span>
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Information Section - Styled to match other pages */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Why We're Collecting This Information</h3>
            <p className="text-gray-700 mb-4">
              At the University of Georgia, we're dedicated to developing innovative solutions for pathogenic detection. Your responses will help us create systems that better address the needs of professionals like you.
            </p>
            <p className="text-gray-700">
              All information provided will be kept confidential and used solely for product development purposes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormRedirect;