// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-4 right-4 bg-uga-red text-white text-xs font-bold px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
        <Link 
          to={project.link} 
          className="text-uga-red font-medium hover:underline inline-flex items-center"
        >
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;