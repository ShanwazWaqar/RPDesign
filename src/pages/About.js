// src/pages/About.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Import team member images (you'll need to create these)
import founderImg from '../assets/founder-img.svg';
import teamMember1 from '../assets/team-member1.svg';
import teamMember2 from '../assets/team-member2.svg';
import teamMember3 from '../assets/team-member3.svg';

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
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Ramana Pidaparti',
      role: 'Founder & CEO',
      image: founderImg,
      bio: 'Founder of RP Design Technologies with extensive experience in design, technology, and education.',
    },
    {
      id: 2,
      name: 'Tatavarti',
      role: 'Technical Lead',
      image: teamMember1,
      bio: 'Expert in technical design and implementation of innovative solutions.',
    },
    {
      id: 3,
      name: 'Israr',
      role: 'Health Technology Specialist',
      image: teamMember2,
      bio: 'Specializes in developing health-related technologies and diagnostic tools.',
    },
    {
      id: 4,
      name: 'Sanjay',
      role: 'Education Technology Expert',
      image: teamMember3,
      bio: 'Focused on creating engaging educational tools and STEM learning experiences.',
    },
  ];

  // Core values
  const coreValues = [
    {
      title: "Innovation",
      description: "Pursuing creative solutions that push boundaries in education and health technology.",
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
            Learn about our mission, our team, and our approach to innovation in education and health.
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
              RP Design Technologies, LLC is an educational innovation and health technologies company
              based in Athens, Georgia. We focus on creating devices and products related to diagnostics,
              monitoring, and prediction for healthcare and infrastructure applications.
            </p>
            <p className="text-lg mb-4">
              In addition, we create board games and apps through evidence-based research activities
              that inspire students to pursue STEM education and careers.
            </p>
            <p className="text-lg">
              Through our innovative devices, proprietary designs/algorithms, and technology integration,
              we aim to improve health care and STEM education for emerging markets.
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

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-10"></div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-lg">
              To create innovative educational tools and health technologies that inspire learning
              and improve quality of life through research, design, and development.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-lg">
              To be a leading provider of educational innovations and health technologies
              that transform how people learn, diagnose, and monitor health conditions.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Our work spans across education and health sectors with innovative solutions.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>STEM Education</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Board Games</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Design Innovations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Game Simulators</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We create engaging educational tools designed to inspire the next generation
                of innovators and problem-solvers through hands-on learning experiences.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Health */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-4">Health</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Human Health</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Plants/Fruit/Animal Health</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Structural Health</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-uga-red mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Models & Simulators</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We develop innovative diagnostic and monitoring tools for various health applications,
                from human health to plant/animal health and structural integrity.
              </p>
            </div>
          </AnimatedSection>
        </div>
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
                We begin with extensive research to understand the needs, challenges, and opportunities in the education and health sectors.
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

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Our dedicated team of experts brings together diverse skills in technology,
            education, health, and design to create innovative solutions.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="h-48 bg-gray-200">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-uga-red mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Clients</h2>
          <div className="w-20 h-1 bg-uga-red mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            We work with a diverse range of clients who benefit from our innovative
            educational tools and health technologies.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Home Care Devices</h3>
              <p className="text-gray-700">
                We provide innovative diagnostic and monitoring devices for home health care applications.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Hospital and Medical Clinics</h3>
              <p className="text-gray-700">
                Our health technologies assist medical professionals in diagnostics and monitoring.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">STEM Schools/Educators</h3>
              <p className="text-gray-700">
                We work with educational institutions to enhance STEM learning through our
                innovative games and tools.
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