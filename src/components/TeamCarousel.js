import { useState, useEffect, useRef } from 'react';

const TeamCarousel = () => {
  // UGA colors
  const ugaRed = '#BA0C2F';
  const ugaBlack = '#000000';
  const ugaRedLight = 'rgba(186, 12, 47, 0.15)'; // Light version of UGA red for backgrounds

  // Team members data from the document
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Pidaparti',
      title: 'President and CEO',
      bio: 'He has over 30 years expertise and experience in design, prototyping and modeling studies related to lung health.',
      initials: 'DP',
    },
    {
      id: 2,
      name: 'Dr. Jinxiang Xi',
      title: 'Collaborator',
      bio: 'Associate Professor of Biomedical Engineering at UMass Lowell (UML) with more than sixteen years\' research experience in biomedical devices and pharmaceutical research. His research in respiratory aerosol dynamics is highly interdisciplinary, which bridges biology, medicine, and engineering.',
      initials: 'JX',
    },
    {
      id: 3,
      name: 'Dr. Rao Tatavarti',
      title: 'Co-inventor',
      bio: 'Director of Research at Gayatri Vidya Parishad College of Engineering and expert in photonic systems for health care applications. He developed several photonic systems for engineering applications.',
      initials: 'RT',
    },
    {
      id: 4,
      name: 'Dr. Sanjay Oruganti',
      title: 'Co-inventor',
      bio: 'Research Scientist at RPI with expertise in hardware/software integration for the machine learning models development along the photonics system development and testing.',
      initials: 'SO',
    },
    {
      id: 5,
      name: 'Mr. Naveen Kurra, MS',
      title: 'Research Assistant',
      bio: 'Research Assistant at UGA with expertise in hardware/software and AI/machine learning models for engineering applications.',
      initials: 'NK',
    },
    {
      id: 6,
      name: 'Dr. Andrew McKown, MD',
      title: 'Consultant',
      bio: 'A pulmonologist from Athens Pulmonary Hospital, Athens, GA with over 15 years of experience in practicing respiratory care medicine and treating patients, and is actively involved in research efforts at AU/UGA Medical Partnership.',
      initials: 'AM',
    },
    {
      id: 7,
      name: 'Dr. Crystal Leach',
      title: 'Business Consultant',
      bio: 'Senior Director, Office of Corporate Engagement at Georgia Institute of Technology, part of the business team to further explore marketing opportunities and commercialization.',
      initials: 'CL',
    },
    {
      id: 8,
      name: 'Dr. Cynthia Pritchard',
      title: 'Regulatory Consultant',
      bio: 'From BioTechnology Transfer, LLC, consultant to further develop our system for meeting FDA regulatory requirements for Class I medical devices.',
      initials: 'CP',
    },
    {
      id: 9,
      name: 'Shanwaz Kotekanti, MS',
      title: 'Software Designer',
      bio: 'Software designer with expertise related to front/backend web developments.',
      initials: 'SK',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  
  // Number of cards to show based on screen width
  const [cardsToShow, setCardsToShow] = useState(3);
  
  // Update cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-scroll functionality - 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);
  
  const totalSlides = teamMembers.length;
  const maxIndex = totalSlides - cardsToShow;
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 1 < 0 ? maxIndex : prevIndex - 1;
      setActiveSlide(newIndex);
      return newIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1 > maxIndex ? 0 : prevIndex + 1;
      setActiveSlide(newIndex);
      return newIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go next (reduced threshold for better mobile response)
      handleNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go prev (reduced threshold for better mobile response)
      handlePrev();
    }
  };
  
  // Jump to specific slide
  const goToSlide = (index) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    setActiveSlide(index);
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Calculate visible team members
  const visibleMembers = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % teamMembers.length;
    visibleMembers.push(teamMembers[index]);
  }
  
  return (
    <div className="relative w-full">
      {/* Team Carousel */}
      <div 
        className="overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(0%)` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {visibleMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform h-full ${
                  index === 1 ? 'lg:scale-105 z-10' : 'scale-100 z-0'
                }`}
              >
                {/* Fixed height top section with initials - Using UGA red for background */}
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: ugaRedLight }}
                >
                  <span 
                    className="text-4xl font-bold"
                    style={{ color: ugaRed }}
                  >
                    {member.initials || member.name.split(' ')[0][0] + (member.name.split(' ').length > 1 ? member.name.split(' ')[1][0] : '')}
                  </span>
                </div>
                
                {/* Fixed height content section with scrollable bio if needed */}
                <div className="p-6 flex flex-col h-64"> {/* Fixed height of 16rem (64) */}
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ color: ugaRed }}
                  >{member.name}</h3>
                  <p className="text-gray-700 font-medium mb-3">{member.title}</p>
                  
                  {/* Scrollable bio section if content is too long */}
                  <div className="overflow-y-auto flex-grow pr-1">
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={handlePrev}
          style={{ backgroundColor: ugaRed }}
          className="text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          aria-label="Previous team member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {Array.from({ length: Math.min(7, totalSlides - cardsToShow + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{ 
                backgroundColor: activeSlide === index ? ugaRed : '#E5E7EB',
                width: '10px',
                height: '10px'
              }}
              className="rounded-full transition-colors focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          style={{ backgroundColor: ugaRed }}
          className="text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          aria-label="Next team member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;