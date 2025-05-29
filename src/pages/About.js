// src/pages/About.js
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import TeamCarousel from '../components/TeamCarousel';

const AnimatedSection = ({ children, className, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: delay,
            ease: "easeOut" 
          } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  // Core values
  const coreValues = [
    {
      title: "Innovation",
      description: "Pursuing creative solutions that push boundaries in health technology.",
      icon: "🔍"
    },
    {
      title: "Quality",
      description: "Committed to excellence in every product and service we deliver.",
      icon: "✓"
    },
    {
      title: "Collaboration",
      description: "Working together with clients, partners, and communities for optimal results.",
      icon: "🤝"
    },
    {
      title: "Impact",
      description: "Measuring success by the positive changes our technologies bring.",
      icon: "📊"
    }
  ];

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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Learn about our mission, our team, and our approach to innovation in health.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-uga-red mb-6"></div>
            <p className="text-lg mb-4">
              RP Design Technologies, LLC is a health technologies company
              based in Athens, Georgia. We focus on creating devices and products related to diagnostics,
              monitoring, and prediction for healthcare and infrastructure applications.
            </p>
            <p className="text-lg mb-4">
              Our innovative devices, proprietary designs/algorithms, and technology integration
              aim to improve health care for emerging markets.
            </p>
            <p className="text-lg">
              Through rigorous research and development, we create reliable solutions that address
              critical needs in various health sectors.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Replace with your actual image */}
              <div className="bg-gray-200 rounded-lg h-80 w-full"></div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-40 bg-uga-red rounded-lg -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            These foundational principles guide everything we do at RP Design Technologies.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="text-4xl mb-4 text-uga-red">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* What We Do - Health Focus Only */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Our work focuses on health sectors with innovative solutions.
          </p>
        </AnimatedSection>
        
        {/* Full Width Health Card */}
        <AnimatedSection delay={0.1}>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-uga-red">Health</h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-uga-red text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Human Health</h4>
                      <p className="text-gray-600">Diagnostic tools for respiratory and other human health conditions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-uga-red text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Plants/Fruit/Animal Health</h4>
                      <p className="text-gray-600">Monitoring systems for agricultural and livestock applications</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-uga-red text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Structural Health</h4>
                      <p className="text-gray-600">Solutions for monitoring and assessing infrastructure integrity</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-uga-red text-white rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Models & Simulators</h4>
                      <p className="text-gray-600">Advanced modeling and simulation for health applications</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg">
              We develop innovative diagnostic and monitoring tools for various health applications,
              from human health to plant/animal health and structural integrity. Our solutions 
              leverage cutting-edge technology to provide accurate, reliable data that improves 
              outcomes and enhances decision-making processes.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Team Carousel Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Our dedicated team of experts brings together diverse skills in technology,
            health, and innovation to create effective solutions.
          </p>
        </AnimatedSection>
        
        {/* Team Carousel Component */}
        <TeamCarousel />
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            We follow a research-driven, human-centered approach to design and development.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="bg-white p-6 rounded-lg shadow-md h-full relative overflow-hidden">
              <div className="w-16 h-16 flex items-center justify-center bg-uga-red text-white rounded-full mb-4 text-xl font-bold">01</div>
              <h3 className="text-xl font-bold mb-3">Research</h3>
              <p className="text-gray-700">
                We begin with extensive research to understand the needs, challenges, and opportunities in the health sector.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="bg-white p-6 rounded-lg shadow-md h-full relative overflow-hidden">
              <div className="w-16 h-16 flex items-center justify-center bg-uga-red text-white rounded-full mb-4 text-xl font-bold">02</div>
              <h3 className="text-xl font-bold mb-3">Design & Development</h3>
              <p className="text-gray-700">
                Our team collaborates to create innovative solutions, prototypes, and products that address the identified challenges.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-6 rounded-lg shadow-md h-full relative overflow-hidden">
              <div className="w-16 h-16 flex items-center justify-center bg-uga-red text-white rounded-full mb-4 text-xl font-bold">03</div>
              <h3 className="text-xl font-bold mb-3">Implementation</h3>
              <p className="text-gray-700">
                We rigorously test our products and work closely with clients to ensure successful implementation and meaningful impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-uga-red text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Working With Us?</h2>
          <p className="text-xl mb-8">
            Contact us to learn more about our projects or discuss collaboration opportunities.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-uga-red font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;