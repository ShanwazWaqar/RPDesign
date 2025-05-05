// src/pages/Home.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import components
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ThreeJSAnimation from '../components/ThreeJSAnimation';
import ScrollAnimation from '../components/ScrollAnimation';

// Import sample images (you'll need to create these)
import educationImg from '../assets/education-img.svg';
import healthImg from '../assets/health-img.svg';
import techImg from '../assets/tech-img.svg';
import boardGameImg from '../assets/board-game-img.svg';

const Home = () => {
  // Refs for scrolling animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  // Values for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // Services data
  const services = [
    {
      id: 1,
      title: 'Education',
      description: 'Innovative STEM education through board games, applications, and learning tools.',
      icon: 'education',
      image: educationImg,
    },
    {
      id: 2,
      title: 'Health',
      description: 'Diagnostic and monitoring tools for human health, plant/animal health, and structural health.',
      icon: 'health',
      image: healthImg,
    },
    {
      id: 3,
      title: 'Technology',
      description: 'Custom devices, proprietary designs and algorithms for healthcare and infrastructure.',
      icon: 'tech',
      image: techImg,
    },
  ];

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: 'River Rush Board Game',
      description: 'Teach sustainability to school children through an engaging board game experience.',
      image: boardGameImg,
      category: 'Education',
      link: '/projects/river-rush',
    },
    {
      id: 2,
      title: 'DSG: Mission to Mars',
      description: 'Board game introducing the design process and engineering values to students.',
      image: boardGameImg,
      category: 'Education',
      link: '/projects/mission-to-mars',
    },
    {
      id: 3,
      title: 'Mpuzzle Game',
      description: '3D puzzle with building blocks that mimic natural cellular structures.',
      image: boardGameImg,
      category: 'Education',
      link: '/projects/mpuzzle',
    },
  ];

  return (
    <>
      {/* Hero Section with ThreeJS Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* ThreeJS Animation Background */}
        <div className="absolute inset-0">
          <ThreeJSAnimation className="w-full h-full" />
        </div>
        
        {/* Gradient Overlay */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-uga-red/80 to-uga-black/80"
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            RP Design Technologies
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            Education and Health Innovations for Emerging Markets
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/projects" className="btn-primary">
              Explore Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="animate-bounce p-2 bg-white rounded-full">
            <svg className="h-6 w-6 text-uga-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={targetRef} className="section-container bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animationType="slideInLeft">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <div className="w-20 h-1 bg-uga-red mb-6"></div>
            <p className="text-lg mb-6">
              RP Design Technologies is based in Athens, Georgia focusing on research, design, 
              development and commercialization of diagnostic/assessment devices as well as educational games and apps.
            </p>
            <p className="text-lg mb-6">
              Through innovative devices, proprietary designs/algorithms and technology integration, 
              we aim to improve health care and STEM education.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="slideInRight" delay={0.2}>
            <div className="relative">
              {/* Replace with your actual image */}
              <div className="bg-gray-200 rounded-lg h-80 w-full"></div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-40 bg-uga-red rounded-lg -z-10"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section with Scroll Animation */}
      <section className="section-container bg-gray-50">
        <ScrollAnimation animationType="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Focus Areas</h2>
            <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto">
              We create innovative solutions in education and health to address 
              real-world challenges through technology and design.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={service.id}
              animationType="fadeInUp"
              delay={index * 0.2}
            >
              <ServiceCard service={service} />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Featured Projects Section with Scroll Animation */}
      <section className="section-container">
        <ScrollAnimation animationType="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our innovative board games and applications designed to inspire 
              STEM education and provide health solutions.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ScrollAnimation 
              key={project.id}
              animationType={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
              delay={index * 0.15}
            >
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation animationType="fadeIn" delay={0.3} className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </ScrollAnimation>
      </section>

      {/* Interactive Parallax Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-uga-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-uga-red" style={{ 
            transform: `translateY(${scrollYProgress.get() * 50}px)`,
            opacity: 0.8
          }}></div>
        </div>
        
        <div className="relative z-20 flex items-center justify-center h-full text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimation animationType="scale">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Innovative Solutions for Tomorrow's Challenges
              </h2>
              <p className="text-xl md:text-2xl">
                Combining technology, education, and healthcare to create a better future.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-uga-red text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollAnimation animationType="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8">
              Whether you're interested in our educational games, health diagnostics, or technological solutions,
              we'd love to hear from you.
            </p>
            <Link to="/contact" className="inline-block bg-white text-uga-red font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300">
              Get in Touch
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Home;