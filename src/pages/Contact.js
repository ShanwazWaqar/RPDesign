// src/pages/Contact.js
import React, { useRef, useState, useEffect } from 'react';
import GoogleMap from '../components/GoogleMap';

const Contact = () => {
  const contactFormRef = useRef(null);
  
  // Initialize EmailJS on component mount
  useEffect(() => {
    // Load the EmailJS SDK
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => {
      // Initialize with your EmailJS public key
      window.emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
    };
    
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);
  
  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      phone_number: formData.phone || 'Not provided',
      subject: formData.subject || 'General Inquiry',
      message: formData.message
    };
    
    // Send email using EmailJS
    window.emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      setSubmitError(true);
      setErrorMessage('There was a problem sending your message. Please try again later.');
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-uga-red text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Get in touch with our team to learn more about our projects or discuss collaboration opportunities.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form Card */}
            <div ref={contactFormRef} className="bg-white rounded-lg shadow-md p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p>Our team will get back to you as soon as possible.</p>
                </div>
              ) : submitError ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p className="font-medium">Message not sent</p>
                  <p>{errorMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uga-red"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uga-red"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uga-red"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uga-red"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uga-red"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="design">Design Products</option>
                      <option value="health">Health Technologies</option>
                      <option value="collaboration">Partnership/Collaboration</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uga-red"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-uga-red text-white font-medium py-2 px-6 rounded-md hover:bg-red-800 transition duration-300 inline-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    <span className="text-sm text-gray-500">* Required fields</span>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information Card - With same height as the form */}
            <div className="bg-white rounded-lg shadow-md p-8 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-uga-red mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">1670 Terrapin Ct</p>
                    <p className="text-gray-600">Watkinsville, GA 30677</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-uga-red mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">706-769-0435</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-uga-red mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:rmparti2011@gmail.com" className="hover:text-uga-red">
                        rmparti2011@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-uga-red mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Work With Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Work With Us</h2>
            <p className="mb-4 text-gray-700">Interested in joining our team of innovators in design and health technology?</p>
            <p className="text-gray-700">
              Email us at{' '}
              <a href="mailto:rmparti2011@gmail.com" className="text-uga-red hover:underline">
                rmparti2011@gmail.com
              </a>
              {' '}with your resume and a cover letter describing your interest in our work.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">We're currently looking for passionate individuals with backgrounds in:</p>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li>Design Innovation</li>  
                <li>Health Diagnostics Technology</li>
                <li>3D Modeling & Simulation</li>
                <li>Software Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Location</h2>
          <p className="text-center text-gray-600 mb-8">We're conveniently located near the University of Georgia Terry College of Business.</p>
          
          {/* Google Maps Component */}
          <div className="bg-white rounded-lg shadow-md p-2 mb-4">
            <GoogleMap />
          </div>
          
          <div className="text-center">
            <a 
              href="https://goo.gl/maps/W67A9TgQLMxLMT6a6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-uga-red hover:underline"
            >
              {/* <span>Get Directions</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg> */}
            </a>
          </div>
        </div>
      </section>
      
      
      {/* CTA Section with proper link to contact form */}
      <section className="bg-uga-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Innovate With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a design professional, healthcare specialist, or technology enthusiast,
            we'd love to collaborate with you on innovative solutions.
          </p>
          <button 
            onClick={scrollToContactForm} 
            className="inline-block bg-white text-uga-red font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;