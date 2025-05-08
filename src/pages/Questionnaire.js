import React from 'react';

const FormRedirect = () => {
  // UGA colors
  const ugaRed = '#BA0C2F';
  
  // Microsoft Form URL
  const MICROSOFT_FORM_URL = 'https://forms.office.com/r/rbRjPiqX2x';
  
  const handleButtonClick = () => {
    window.open(MICROSOFT_FORM_URL, '_blank');
  };
  
  return (
    <div className="min-h-screen">
      {/* UGA-colored header section to make transparent navbar visible */}
      <div style={{ backgroundColor: ugaRed }} className="w-full h-40 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-3xl font-bold">Questionnaire</h1>
        </div>
      </div>
      
      {/* Main content */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-8 -mt-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Thank you for your interest in our research!
            </h2>
            
            <p className="text-gray-700 mb-8 text-center">
              We invite you to participate in our survey about pathogenic bacteria detection systems. Your valuable feedback will help us improve our technology and better serve your needs.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md mb-8">
              <h3 className="font-semibold mb-2">What to expect:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>The survey takes approximately 5-10 minutes to complete</li>
                <li>All questions are related to pathogenic bacteria detection needs</li>
                <li>Your responses will remain confidential</li>
                <li>The survey is hosted securely on Microsoft Forms</li>
              </ul>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleButtonClick}
                style={{ backgroundColor: ugaRed }}
                className="inline-block text-white font-medium py-3 px-8 rounded-md hover:bg-red-800 transition duration-300"
              >
                Begin Survey
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mt-8 mb-8">
            <h3 className="text-lg font-semibold mb-2">Why We're Collecting This Information</h3>
            <p className="text-gray-700 mb-4">
              At the University of Georgia, we're dedicated to developing innovative solutions for pathogenic bacteria detection. Your responses will help us create a system that better addresses the needs of professionals like you.
            </p>
            <p className="text-gray-700">
              All information provided will be kept confidential and used solely for product development purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRedirect;