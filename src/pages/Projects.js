// src/pages/Projects.js
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

// Components
import ProjectCard from '../components/ProjectCard';

// Import sample images (you'll need to create these)
import riverRushImg from '../assets/river-rush.svg';
import missionToMarsImg from '../assets/mission-to-mars.svg';
import mpuzzleImg from '../assets/mpuzzle.svg';
import fruitHealthImg from '../assets/fruit-health.svg';
import respiratoryImg from '../assets/respiratory.svg';
import structuralHealthImg from '../assets/structural-health.svg';
import gameSimImg from '../assets/game-simulators.svg';
import robotsImg from '../assets/robots.svg';
import poultryImg from '../assets/poultry.svg';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Project data from the document - wrapped in useMemo to prevent recreation on each render
  const allProjects = useMemo(() => [
    // The following 4 projects have been commented out as requested
    /*
    {
      id: 1,
      title: 'River Rush Board Game',
      description: 'Teach sustainability through an engaging board game experience. Players journey through the James River by answering questions about sustainability.',
      image: riverRushImg,
      category: 'Board Games',
      type: 'design', // Changed from 'education'
    },
    {
      id: 2,
      title: 'DSG: Mission to Mars',
      description: 'Board game introducing the design process and engineering values. Teams go through various steps of the design process and learn to make decisions and build their design.',
      image: missionToMarsImg,
      category: 'Board Games',
      type: 'design', // Changed from 'education'
    },
    {
      id: 3,
      title: 'Mpuzzle Game',
      description: '3D puzzle with building blocks that mimic natural cellular structures. This puzzle helps teach problem-solving skills.',
      image: mpuzzleImg,
      category: 'Board Games',
      type: 'design', // Changed from 'education'
    },
    {
      id: 7,
      title: 'Game Simulators',
      description: 'Interactive game simulators for enhancing creative thinking and problem-solving experiences.',
      image: gameSimImg,
      category: 'Game Simulators',
      type: 'design', // Changed from 'education'
    },
    */
    {
      id: 4,
      title: 'Fruit Health APP',
      description: 'Application for monitoring and assessing the health of fruits and plants.',
      image: fruitHealthImg,
      category: 'Apps',
      type: 'health',
    },
    {
      id: 5,
      title: 'Respiratory Diagnostics',
      description: 'Tools and applications for diagnosing and monitoring respiratory health conditions.',
      image: respiratoryImg,
      category: 'Apps',
      type: 'health',
    },
    {
      id: 6,
      title: 'Structural Health',
      description: 'Solutions for monitoring and assessing the health of infrastructure and structures.',
      image: structuralHealthImg,
      category: 'Apps',
      type: 'health',
    },
    {
      id: 8,
      title: 'Self-Assembly',
      description: 'Technologies and tools focusing on self-assembly processes.',
      image: gameSimImg,
      category: 'Game Simulators',
      type: 'technology',
    },
    {
      id: 9,
      title: 'Heterogeneous Robots',
      description: 'Development of diverse robotic systems for various applications.',
      image: robotsImg,
      category: 'Game Simulators',
      type: 'technology',
    },
    {
      id: 10,
      title: 'Poultry House Monitoring',
      description: 'Systems for monitoring and managing poultry house conditions and health.',
      image: poultryImg,
      category: 'Game Simulators',
      type: 'health',
    },
  ], []); // Empty dependency array means this only runs once

  // Apply filter
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.type === filter));
    }
  }, [filter, allProjects]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-uga-red text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Explore our innovative projects in design, health, and technology.  {/* Changed from "education, health, and technology" */}
          </motion.p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md mb-2 transition-colors ${
                filter === 'all'
                  ? 'bg-uga-red text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            {/* <button
              onClick={() => setFilter('design')} 
              className={`px-4 py-2 rounded-md mb-2 transition-colors ${
                filter === 'design' 
                  ? 'bg-uga-red text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Design  
            </button> */}
            <button
              onClick={() => setFilter('health')}
              className={`px-4 py-2 rounded-md mb-2 transition-colors ${
                filter === 'health'
                  ? 'bg-uga-red text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Health
            </button>
            <button
              onClick={() => setFilter('technology')}
              className={`px-4 py-2 rounded-md mb-2 transition-colors ${
                filter === 'technology'
                  ? 'bg-uga-red text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Technology
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="animate-on-scroll"
              >
                <ProjectCard project={{ ...project, link: `/projects/${project.id}` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in our projects?</h2>
          <p className="text-lg mb-8">
            Contact us to learn more about our design innovations, health technologies, or technological solutions.  {/* Changed from "educational games" */}
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-uga-red text-white font-semibold rounded-md shadow-md hover:bg-uga-red/90 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;