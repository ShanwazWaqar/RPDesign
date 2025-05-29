// src/pages/Home.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import components
import ServiceCard from '../components/ServiceCard';
import ScrollAnimation from '../components/ScrollAnimation';

// Import SVG illustrations - update these paths to where you save the SVG files
import AboutIllustration from '../assets/about-illustration.svg';
import DesignSvg from '../assets/design-card.svg';
import HealthSvg from '../assets/health-card.svg';
import TechSvg from '../assets/tech-card.svg';

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

  // Services data - with professional SVG images
  const services = [
    {
      id: 1,
      title: 'Design',
      description: 'Innovative design solutions through board games, applications, and learning tools.',
      icon: 'design',
      image: DesignSvg,
    },
    {
      id: 2,
      title: 'Health',
      description: 'Diagnostic and monitoring tools for human health, plant/animal health, and structural health.',
      icon: 'health',
      image: HealthSvg,
    },
    {
      id: 3,
      title: 'Technology',
      description: 'Custom devices, proprietary designs and algorithms for healthcare and infrastructure.',
      icon: 'tech',
      image: TechSvg,
    },
  ];

  return (
    <>
      {/* Hero Section with Static Gradient */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Static Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-uga-red/90 to-uga-black/90"></div>
        
        {/* Content */}
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
            Design and Health Innovations for Emerging Markets
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

      {/* About Section with Professional Illustration */}
      <section ref={targetRef} className="section-container bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animationType="slideInLeft">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <div className="w-20 h-1 bg-uga-red mb-6"></div>
            <p className="text-lg mb-6">
              RP Design Technologies is based in Athens, Georgia focusing on research, design, 
              development and commercialization of diagnostic/assessment devices as well as interactive games and apps.
            </p>
            <p className="text-lg mb-6">
              Through innovative devices, proprietary designs/algorithms and technology integration, 
              we aim to improve health care and design innovation.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="slideInRight" delay={0.2}>
            <div className="relative">
              {/* Professional SVG illustration */}
              <img 
                src={AboutIllustration} 
                alt="Health technology visualization" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-2/3 h-40 bg-uga-red rounded-lg -z-10"></div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section with Professional SVG Cards */}
      <section className="section-container bg-gray-50">
        <ScrollAnimation animationType="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Focus Areas</h2>
            <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto">
              We create innovative solutions in design and health to address 
              real-world challenges through technology and creative thinking.
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

      {/* Interactive Parallax Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-uga-red opacity-90"></div>
        <div className="absolute inset-0 bg-uga-black/60 z-10"></div>
        
        <div className="relative z-20 flex items-center justify-center h-full text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimation animationType="scale">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Innovative Solutions for Tomorrow's Challenges
              </h2>
              <p className="text-xl md:text-2xl">
                Combining technology, design, and healthcare to create a better future.
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
              Whether you're interested in our design innovations, health diagnostics, or technological solutions,
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