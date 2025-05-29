// src/components/ServiceCard.js
import React from 'react';
import { motion } from 'framer-motion';

// Icons for different service types
const ServiceIcon = ({ type }) => {
  switch (type) {
    case 'design': // Changed from 'education'
      return (
        <svg className="w-12 h-12 text-uga-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* Main pencil/pen tool */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.5 3.5a2.12 2.12 0 0 1 3 3L6 18l-4 1 1-4L14.5 3.5z" />
          
          {/* Color palette circle */}
          <circle cx="18" cy="16" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          
          {/* Ruler/measure line */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l2 -2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7l2 -2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4l2 -2" />
          
          {/* Grid/layout elements */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 19h-7" />
        </svg>
      );
    case 'health':
      return (
        <svg className="w-12 h-12 text-uga-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'tech':
      return (
        <svg className="w-12 h-12 text-uga-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      );
    default:
      return null;
  }
};

const ServiceCard = ({ service }) => {
  return (
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <ServiceIcon type={service.icon} />
        </div>
        <p className="text-gray-700">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;